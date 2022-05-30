const {check} = require ('express-validator')

let validarCriarConta = [
    check('name')
    .notEmpty().withMessage('O campo nome deve ser preenchido').bail()
    .isLength({min:5}).withMessage('O nome deve ter pelo menos 3 caracteres')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('email')
    .notEmpty().withMessage('O campo email deve ser preenchido').bail()
    .isEmail().withMessage('Digite um email valido'),
    check('password')
    .notEmpty().withMessage('O campo senha deve ser preenchido').bail()
    .isLength({min:6}).withMessage('A senha deve ter pelo menos 6 caracteres')
]

module.exports = validarCriarConta