var express = require('express');
var router = express.Router();
const {check} = require ('express-validator')

const HomeController = require ('../controllers/HomeController')
const ProductController = require ('../controllers/ProductController')
const FinalizarCompraController = require ('../controllers/FinalizarCompraController')
const SucessoController = require ('../controllers/SucessoController')
const LoginController = require ('../controllers/LoginController')
const Painelontroller = require ('../controllers/PainelController')
const CarrinhoController = require ('../controllers/CarrinhoController')
const ProductListController = require ('../controllers/ProductListController')
const {body} = require('express-validator')

let validadeLogin = [
    check('name')
    .notEmpty().withMessage('O campo deve ser preenchido').bail()
    .isLength({min:5}).withMessage('O nome deve ter pelo menos 5 caracteres'),
    check('email')
    .notEmpty().withMessage('O campo deve ser preenchido').bail()
    .isEmail().withMessage('Digite um email valido'),
    check('password')
    .notEmpty().withMessage('O campo deve ser preenchido').bail()
    .isLength({min:6}).withMessage('A senha deve ter pelo menos 6 caracteres'),

]


const validacoes =[
    body('nome').notEmpty().withMessage('O nome não pode ser vazio')
];

router.get('/home', HomeController.home) 

router.get('/product', ProductController.product) 

router.get('/finalizarcompra', FinalizarCompraController.finalizarCompra) 

router.get('/sucesso', SucessoController.sucesso) 

router.get('/login', LoginController.login) 
router.post('/login/criar', validadeLogin, LoginController.criarConta)

router.get('/productlist', ProductListController.productList) 

router.get('/painel', validacoes, Painelontroller.painel) 

router.get('/carrinho', CarrinhoController.carrinho) 

module.exports = router;
