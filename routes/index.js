var express = require('express');
var router = express.Router();
const {check} = require ('express-validator')

// Controllers
const HomeController = require ('../controllers/HomeController')
const ProductController = require ('../controllers/ProductController')
const FinalizarCompraController = require ('../controllers/FinalizarCompraController')
const SucessoController = require ('../controllers/SucessoController')
const LoginController = require ('../controllers/LoginController')
const PainelController = require ('../controllers/PainelController')
const CarrinhoController = require ('../controllers/CarrinhoController')
const ProductListController = require ('../controllers/ProductListController')
const PainelLogadoController = require('../controllers/PainelLogadoController')
const LogoutController = require('../controllers/LogoutController')


// Express-validator
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

let validarEntrarConta = [
    check('email')
    .notEmpty().withMessage('O campo email deve ser preenchido').bail()
    .isEmail().withMessage('Digite um email valido'),
    check('password')
    .notEmpty().withMessage('O campo senha deve ser preenchido').bail()
    .isLength({min:6}).withMessage('A senha deve ter pelo menos 6 caracteres')
]

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

let validarCompra = [
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
    .isLength({min:8}).withMessage('O nome e muito curto!')
    .isAlpha().withMessage('Deve ser digitado somente letras'),
    check('CodigoSeguranca')
    .notEmpty().withMessage('O campo Codigo de Seguranca deve ser preenchido').bail()
    .isInt().withMessage('O campo Codigo de Seguranca aceita somente numeros')
    .isLength({min:3, max:3}).withMessage('Codigo de Seguranca Invalido'),
    check('QuantidadeParcelas')
    .isInt().withMessage('Escolha a quantidade de parcelas').bail()
]

// Rotas

router.get('/home', HomeController.home) 

router.get('/product', ProductController.product) 

router.get('/finalizarcompra', FinalizarCompraController.finalizarCompra) 
router.post ('/finalizarCompra/comprar', validarCompra, FinalizarCompraController.comprar)

router.get('/sucesso', SucessoController.sucesso) 

router.get('/login', LoginController.login) 
router.post('/login/criar', validarCriarConta, LoginController.criarConta)
router.post('/login/entrar', validarEntrarConta, LoginController.entrarConta)

router.get('/productlist', ProductListController.productList) 

router.get('/painel', PainelController.painel) 
router.post ('/painel/editar', validarEditarPainel, PainelController.editarPainel)

router.get('/painelLogado', PainelLogadoController.logado) 
router.get('/logout', LogoutController.logout)

router.get('/carrinho', CarrinhoController.carrinho) 

module.exports = router;
