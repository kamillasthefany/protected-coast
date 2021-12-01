const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Usuario = require('../models/Usuario');

const router = express.Router();

router.post('/registrar', async (request, response) => {

  try {

    const { email } = request.body;
    if (await Usuario.findOne({ email }))
      return response.status(200).send({ erro: 'Usuário já existe' });

    const usuario = await Usuario.create(request.body);

    //usuario.password = undefined;
    return response.send({ usuario });

  }
  catch (error) {
    return response.status(400).send({ error: 'Falha ao registrar o usuário' });
  }
});

router.post('/autenticacao', async (request, response) => {

  try {

    const { email, senha } = request.body;
    const usuario = await Usuario.findOne({ email })

    if (!usuario)
      return response.status(400).send({ erro: 'Usuário não encontrado' });

    if (! await bcrypt.compare(senha, usuario.senha))
      return response.status(400).send({ erro: 'Senha incorreta' });


    return response.status(200).send({ usuario });

  }
  catch (error) {
    return response.status(400).send({ error: 'Falha logar' });
  }
});

router.post('/esqueci_senha', async (request, response) => {
  try {

    const { email } = request.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario)
      return response.status(400).send({ erro: 'Usuário não encontrado' });

    const token = crypto.randomBytes(20).toString('hex');
    const now = new Date();
    now.setHours(now.getHours() + 1);

    await Usuario.findByIdAndUpdate(usuario.id, {
      '$set': {
        reset_token: token,
        reset_expires: now,
      }
    });

    console.log(teste);

  }
  catch (error) {
    response.status(400).send({ error: 'Erro ao recuperar senha' });
  }
});

module.exports = app => app.use('/autenticacao', router);