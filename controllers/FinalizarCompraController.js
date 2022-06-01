const { validationResult } = require('express-validator')
const FinalizarCompraController = {
    finalizarCompra: function (req, res) {
        res.render('finalizarCompra');
    },
    finalizarCompraSuccess: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            res.render('sucesso')
        } else {
            res.render('finalizarCompra', { errors: errors.mapped(), old: req.body })
        }
        console.log(req.body)
    },
}

module.exports = FinalizarCompraController;