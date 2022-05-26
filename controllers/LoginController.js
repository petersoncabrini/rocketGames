const { validationResult } = require('express-validator');
const req = require('express/lib/request');

const LoginController = {
    login: function (req, res) {
        res.render('login');
    },
    criarConta: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            res.redirect('/home')
        } else {
            res.render('login', { errors: errors.mapped(), old: req.body })
        }
        console.log(req.body)
    },
    entrarConta: (req, res) => {
       let errors = validationResult(req);
        if (errors.isEmpty()) {
            req.session.emailUsuario = 'brucebat@gmail.com';
            req.session.nomeUsuario = 'Bruce Wayne';
            req.session.idUsuario = '1';
            res.redirect('/painelLogado');
        } else {
            res.render('login', { errors: errors.mapped(), old: req.body })
        }
        console.log(req.body)
    },
}



module.exports = LoginController;