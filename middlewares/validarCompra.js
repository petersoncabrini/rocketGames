const {check} = require ('express-validator')

let validarCompra = [
    check('Endereco')
    .notEmpty().withMessage('O campo Endereco deve ser preenchido').bail(),
    check('Numero')
    .notEmpty().withMessage('O campo Numero deve ser preenchido').bail()
    .isInt().withMessage('O campo Numero aceita somente numeros'),
    check('Bairro')
    .notEmpty().withMessage('O campo Bairro deve ser preenchido'),
    check('Cidade')
    .notEmpty().withMessage('O campo Cidade deve ser preenchido'),
    check('Estado')
    .notEmpty().withMessage('O campo Estado deve ser preenchido'),
    check('CEP')
    .notEmpty().withMessage('O campo CEP deve ser preenchido').bail()
    .isPostalCode('BR').withMessage('CEP Invalido'),
    check('NumeroCartao')
    .notEmpty().withMessage('O campo Numero do Cartao deve ser preenchido').bail()
    .isCreditCard().withMessage('Digite um numero de cartao valido!'),
    check('Validade')
    .notEmpty().withMessage('O campo Validade deve ser preenchido').bail()
    .isDate().withMessage('Digite uma data valida'),
    check('NomeCartao')
    .notEmpty().withMessage('O campo Nome no Cartao deve ser preenchido').bail()
    .isLength({min:8}).withMessage('O nome e muito curto!'),
    check('CodigoSeguranca')
    .notEmpty().withMessage('O campo Codigo de Seguranca deve ser preenchido').bail()
    .isInt().withMessage('O campo Codigo de Seguranca aceita somente numeros')
    .isLength({min:3, max:3}).withMessage('Codigo de Seguranca Invalido'),
    check('QuantidadeParcelas')
    .isInt().withMessage('Escolha a quantidade de parcelas').bail()
]

module.exports = validarCompra