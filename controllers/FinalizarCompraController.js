const { validationResult } = require('express-validator')
const FinalizarCompraController = {
    finalizarCompra: function (req, res) {
        res.render('finalizarCompra');
    },
    comprar: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            res.redirect('/home')
        } else {
            res.render('finalizarCompra', { errors: errors.mapped(), old: req.body })
        }
        console.log(req.body)
    },
}

module.exports = FinalizarCompraController;