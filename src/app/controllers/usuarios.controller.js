const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

const Usuarios = {
    all(request, res, next) {
        Usuario.findAll().then((result) => {
            console.log('userId', request.userId);
            res.json(result);
        })
            .catch(next);
    },

    async create(request, response, next) {

        try {
            const { nome, email, senha } = request.body;
            const senhaBcrypt = await bcrypt.hash(senha, 10);
            const usuario = await Usuario.create({ nome, email, senha: senhaBcrypt });
            return response.status(201).json(usuario);
        }
        catch (error) {
            console.log('error', error);
            return response.status(500).json(error);
        }

    },
};

module.exports = Usuarios;