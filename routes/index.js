var express = require('express');
var router = express.Router();

// Controllers

const HomeController = require ('../controllers/HomeController')
const ProductController = require ('../controllers/ProductController')
const FinalizarCompraController = require ('../controllers/FinalizarCompraController')
const SucessoController = require ('../controllers/SucessoController')
const PainelController = require ('../controllers/PainelController')
const CarrinhoController = require ('../controllers/CarrinhoController')
const UserController = require('../controllers/UserController');
const EnderecoController = require('../controllers/EnderecoController');

// Middlewares
// Validacao de Formularios
const validarCompra = require ('../middlewares/validarCompra')
const validarCriarConta = require ('../middlewares/validarCriarConta')
const validarEditarPainel = require ('../middlewares/validarEditarPainel')
const validarEntrarConta = require ('../middlewares/validarEntrarConta');

//Autenticacao
const auth = require ('../middlewares/auth')



// Rotas
router.get('/home', HomeController.home) 

router.get('/product', ProductController.product) 

router.get('/finalizarcompra', FinalizarCompraController.finalizarCompra) 
router.post ('/finalizarcompra', validarCompra, FinalizarCompraController.finalizarCompraSuccess)

router.get('/sucesso', SucessoController.sucesso) 

router.get('/login', UserController.login) 
router.post('/login/criar', validarCriarConta, UserController.criarConta)
router.post('/login/entrar', validarEntrarConta, UserController.entrarConta)

router.get('/productlist', ProductController.productList) 

router.get('/painel', PainelController.painel) 
router.post ('/painel', validarEditarPainel, PainelController.editarPainel)

router.get('/painelLogado', PainelController.painelLogado) 
router.get('/logout', UserController.logout)

router.get('/carrinho', CarrinhoController.carrinho) 

router.get('/endereco', EnderecoController.index) 

module.exports = router;
