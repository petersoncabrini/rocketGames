var express = require('express');
var router = express.Router();

// Controllers

const HomeController = require ('../controllers/HomeController')
const ProductController = require ('../controllers/ProductController')
const FinalizarCompraController = require ('../controllers/FinalizarCompraController')
const SucessoController = require ('../controllers/SucessoController')
const PainelController = require ('../controllers/PainelController')
const CarrinhoController = require ('../controllers/CarrinhoController')
const EnderecoController = require('../controllers/EnderecoController');
const UsuarioController = require('../controllers/UsuarioController');
const PedidosController = require('../controllers/PedidosController');
const AdminController = require('../controllers/AdminController');
const ProdutoController = require('../controllers/ProdutoController');
const TipoConsoleController = require('../controllers/TipoConsoleController');
const TipoProdutoController = require('../controllers/TipoProdutoController');
const AdminRocketController = require('../controllers/AdminRocketController');


// Middlewares
// Validacao de Formularios
const validarCompra = require ('../middlewares/validações/validarCompra')
const validarCadastro = require ('../middlewares/validações/validarCadastro')
const validarEditarPainel = require ('../middlewares/validações/validarEditarPainel')
const validaLogin = require ('../middlewares/validações/validarLogin');

//Autenticacao
const auth = require ('../middlewares/auth')


// Rotas

router.get('/produto/:idProduto', ProdutoController.produto) // lista de produtos

router.get('/home', HomeController.home) 
router.get('/product', ProductController.product) 
router.get('/finalizarcompra', FinalizarCompraController.finalizarCompra) 
router.post ('/finalizarcompra', validarCompra, FinalizarCompraController.finalizarCompraSuccess)
router.get('/sucesso', SucessoController.sucesso) 
router.get('/login', UsuarioController.login) 
router.post('/login', validaLogin, UsuarioController.acaoLogin)
router.get('/cadastro', UsuarioController.cadastro)
router.post('/cadastro', validarCadastro, UsuarioController.acaoCadastrar)
router.get('/logout', UsuarioController.logout)
router.get('/productlist', ProductController.productList) 
router.get('/painel', PainelController.painel) 
router.post ('/painel', validarEditarPainel, PainelController.editarPainel)
router.get('/painelLogado', PainelController.painelLogado) 

router.get('/carrinho', CarrinhoController.carrinho) 

router.get('/adminRocket', AdminRocketController.adminRocket) 

//Models

router.get('/endereco', EnderecoController.index)
// router.get('/usuario', UsuarioController.index)
router.get('/pedidos', PedidosController.index)
router.get('/admin', AdminController.index)
router.get('/produtos', ProdutoController.index)
router.get('/tipoconsole', TipoConsoleController.index)
router.get('/tipoproduto', TipoProdutoController.index)

module.exports = router;
