var express = require('express');
var router = express.Router();
const HomeController = require ('../controllers/HomeController')
const ProductController = require ('../controllers/ProductController')
const FinalizarCompraController = require ('../controllers/FinalizarCompraController')
const SucessoController = require ('../controllers/SucessoController')
const LoginController = require ('../controllers/LoginController')
const Painelontroller = require ('../controllers/PainelController')
const CarrinhoController = require ('../controllers/CarrinhoController')
const ProductListController = require ('../controllers/ProductListController')
const {body} = require('express-validator')


const validacoes =[
    body('nome').notEmpty().withMessage('O nome não pode ser vazio')
];

router.get('/home', HomeController.home) 

router.get('/product', ProductController.product) 

router.get('/finalizarcompra', FinalizarCompraController.finalizarCompra) 

router.get('/sucesso', SucessoController.sucesso) 

router.get('/login', LoginController.login) 

router.get('/productlist', ProductListController.productList) 

router.get('/painel', validacoes, Painelontroller.painel) 

router.get('/carrinho', CarrinhoController.carrinho) 

module.exports = router;
