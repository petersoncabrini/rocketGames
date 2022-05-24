const { validationResult } = require('express-validator')

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
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            res.redirect('/home')
        } else {
            res.render('login', { errors: errors.mapped(), old: req.body })
        }
        console.log(req.body)
    }
}

module.exports = LoginController;