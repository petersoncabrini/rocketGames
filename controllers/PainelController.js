const { validationResult } = require('express-validator');

const PainelController = {
    painel: function(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            console.log(errors.mapped());
            return res.render('painel', {errors: errors.mapped()});
        }
        return res.send('deu certo');
        /-res.render('painel'); -/
    }
}

module.exports = PainelController;