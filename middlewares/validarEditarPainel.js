const {check} = require ('express-validator')

let validarEditarPainel =[
    check('Nome')
    .notEmpty().withMessage('O campo Nome deve ser preenchido').bail()
    .isLength({min:5}).withMessage('O Nome deve ter pelo menos 3 caracteres')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('Sobrenome')
    .notEmpty().withMessage('O campo Sobrenome deve ser preenchido')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('Usuario')
    .notEmpty().withMessage('O campo Usuario deve ser preenchido')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('Email')
    .notEmpty().withMessage('O campo Email deve ser preenchido').bail()
    .isEmail().withMessage('Digite um email valido'),
    check('CPF')
    .notEmpty().withMessage('O campo CPF deve ser preenchido').bail()
    .isInt().withMessage('O campo CPF aceita somente numeros')
    .isLength({min:11, max:11}).withMessage('CPF Invalido'),
    check('Endereco')
    .notEmpty().withMessage('O campo Endereco deve ser preenchido').bail()
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('Numero')
    .notEmpty().withMessage('O campo Numero deve ser preenchido').bail()
    .isInt().withMessage('O campo Numero aceita somente numeros'),
    check('Bairro')
    .notEmpty().withMessage('O campo Bairro deve ser preenchido')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('Cidade')
    .notEmpty().withMessage('O campo Cidade deve ser preenchido')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('Estado')
    .notEmpty().withMessage('O campo Estado deve ser preenchido')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('CEP')
    .notEmpty().withMessage('O campo CEP deve ser preenchido').bail()
    .isPostalCode('BR').withMessage('CEP Invalido')
]

module.exports = validarEditarPainel