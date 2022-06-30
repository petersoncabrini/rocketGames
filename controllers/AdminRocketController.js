const db = require('../models');
const { validationResult } = require("express-validator")

const AdminRocketController = {
    adminRocket: function(req, res){
        res.render('adminRocket');
    },
    acaoLogin: async (req, res) => {

        const { login, senha } = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("adminrocket", {
                errors: errors.array()
            })
        }

        const adminEncontrado = await db.Admin.findOne({ where: { login: login } })
        if (adminEncontrado == null) {
            return res.render("adminRocket", { login })
        }

        if (senha != adminEncontrado.senha) {
            return res.render("adminRocket", { login })
        } else {

            res.redirect("/home")

        }

    },
}

module.exports = AdminRocketController;