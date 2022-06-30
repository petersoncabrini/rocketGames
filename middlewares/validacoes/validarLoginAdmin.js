const {check} = require ('express-validator')

let validarLogin = [
    check('login')
    .notEmpty().withMessage('O campo login deve ser preenchido').bail(),
    check('senha')
    .notEmpty().withMessage('O campo senha deve ser preenchido').bail()
    .isLength({min:6}).withMessage('A senha deve ter pelo menos 6 caracteres')
]

module.exports = validarLogin