const db = require('../models');
const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator")

const UsuarioController = {
    index: (req, res) => {

        db.TipoProduto.findAll().then((data) => {
            res.send(JSON.stringify(data));
        }).catch((err) => {
            res.send(err);
        })
     },
    login: (req, res) => {
        res.render("login")
    },
    cadastro: (req, res) => {
        res.render("register")
    },
    acaoCadastrar: async (req, res) => {

        const { nome, email, senha } = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("register", {
                errors: errors.array()
            })
        }

        // // Verificando se o email ja esta cadastrado, e caso exista, enviando erro pra view.
        // let usuarioExistente = db.Usuario.findOne({ where: { email: email } })
        // if (usuarioExistente) {
        //     return res.render('register')
        // }

        await db.Usuario.create({
            nome,
            email,
            senha: bcrypt.hashSync(senha)
        })

        res.redirect("/login")

    },
    acaoLogin: async (req, res) => {

        const { email, senha } = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("login", {
                errors: errors.array()
            })
        }

        const usuarioEncontrado = await db.Usuario.findOne({ where: { email: email } })
        if (usuarioEncontrado == null) {
            return res.render("login", { email })
        }

        if (bcrypt.compare(senha, usuarioEncontrado.senha) == false) {
            return res.render("login", { email })
        } else {

            req.session.idUsuario = usuarioEncontrado.id;
            req.session.nome = usuarioEncontrado.nome;
            req.session.email = usuarioEncontrado.email;

            res.redirect("/home")

        }

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/home")
    }
}
module.exports = UsuarioController;