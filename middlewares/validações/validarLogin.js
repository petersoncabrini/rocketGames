const {check} = require ('express-validator')

let validarLogin = [
    check('email')
    .notEmpty().withMessage('O campo email deve ser preenchido').bail()
    .isEmail().withMessage('Digite um email valido'),
    check('senha')
    .notEmpty().withMessage('O campo senha deve ser preenchido').bail()
    .isLength({min:6}).withMessage('A senha deve ter pelo menos 6 caracteres')
]

module.exports = validarLogin