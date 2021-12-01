require("dotenv").config();
const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');


const Autenticacao = {

  async index(request, response, next) {

    try {
      const { email, senha } = request.body;
      console.log('controler autenticação -------', email, senha);
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      const resultado = await bcrypt.compare(senha, usuario.senha);

      if (!resultado)
        return response.status(400).send({ erro: 'Senha incorreta' });

      const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
        expiresIn: 86400,
      });

      return response.status(200).send({ usuario, token });
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }

  },
  async esqueciSenha(request, response, next) {
    try {

      const { email } = request.body;
      const usuario = await Usuario.findOne({ email });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      const token = crypto.randomBytes(20).toString('hex');
      const now = new Date();
      now.setHours(now.getHours() + 1);

      usuario.reset_token = token;
      usuario.reset_expires = now;

      await usuario.save();

      mailer.sendMail({
        to: email,
        from: process.env.MAIL_SEND,
        template: '/reset_senha',
        context: { token },
      }, (error) => {
        if (error) {
          return response.status(400).send({ error: 'Erro ao enviar email' });
        }
        return response.status(200).send('Email enviado com sucesso');
      });

      return response.status(200).send('sucesso');

    }
    catch (error) {
      console.log('erro', error);
      return response.status(400).send({ error: 'Falha ao resetar senha' });
    }
  },
  async resetarSenha(request, response, next) {
    try {

      const { email, token, senha } = request.body;
      const usuario = await Usuario.findOne({ email });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      if (token != usuario.reset_token)
        return response.status(400).send({ erro: 'Token inválido' });

      const now = new Date();

      if (now > usuario.reset_expires)
        return response.status(400).send({ erro: 'Token expirado' });

      const senhaBcrypt = await bcrypt.hash(senha, 10);
      usuario.senha = senhaBcrypt;
      await usuario.save();

      return response.status(200).send('sucesso');

    }
    catch (error) {
      console.log('erro', error);
      return response.status(400).send({ error: 'Falha ao resetar senha' });
    }
  },
};

module.exports = Autenticacao;