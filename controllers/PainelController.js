const { validationResult } = require('express-validator');

const PainelController = {
    painel: function (req, res) {
        res.render('painel');
        nomeUsuaro= 'vrau';
    },
    editarPainel: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            console.log(req.body)
            res.redirect('/home')
        } else {
            res.render('painel', { errors: errors.mapped(), old: req.body })
       }
            
        console.log(req.body)
    },
    painelLogado: function (req, res) {
        if (req.session.idUsuario === undefined) {
            res.redirect('/login');
        } else {
            res.render('painelLogado', {
                nomeUsuario: req.session.nomeUsuario,
                emailUsuario: req.session.emailUsuario,
                idUsuario: req.session.idUsuario
            });
        }
    }
}

module.exports = PainelController