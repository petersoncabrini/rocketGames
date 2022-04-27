var express = require('express');
var router = express.Router();
const HomeController = require ('../controllers/HomeController')
const ProductController = require ('../controllers/ProductController')
const FinalizarCompraController = require ('../controllers/FinalizarCompraController')
const SucessoController = require ('../controllers/SucessoController')
const LoginController = require ('../controllers/LoginController')
const Painelontroller = require ('../controllers/PainelController')
const CarrinhoController = require ('../controllers/CarrinhoController')
router.get('/home', HomeController.index) 

router.get('/product', ProductController.product) 

router.get('/finalizarcompra', FinalizarCompraController.index) 

router.get('/sucesso', SucessoController.index) 

router.get('/login', LoginController.index) 

router.get('/productlist', ProductListController.index) 

router.get('/painel', PainelController.index) 

router.get('/carrinho', CarrinholController.index) 

module.exports = router;
