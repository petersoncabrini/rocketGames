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
const validarCompra = require ('../middlewares/validacoes/validarCompra')
const validarCadastro = require ('../middlewares/validacoes/validarCadastro')
const validarEditarPainel = require ('../middlewares/validacoes/validarEditarPainel')
const validarLogin = require ('../middlewares/validacoes/validarLogin');
const validarLoginAdmin = require ("../middlewares/validacoes/validarLoginAdmin")

//Autenticacao
const authUsuario = require('../middlewares/authUsuario');


// Rotas

router.get('/produto/:idProduto', ProdutoController.produto) // lista de produtos

router.get('/home', HomeController.home) 
router.get('/product', ProductController.product) 
router.get('/finalizarcompra', authUsuario, 
FinalizarCompraController.finalizarCompra) 
router.post ('/finalizarcompra', validarCompra, 
FinalizarCompraController.finalizarCompraSuccess)
router.get('/sucesso', authUsuario, SucessoController.sucesso) 
router.get('/login', UsuarioController.login) 
router.post('/login', validarLogin, UsuarioController.acaoLogin)
router.get('/cadastro', UsuarioController.cadastro)
router.post('/cadastro', validarCadastro, UsuarioController.acaoCadastrar)
router.get('/logout', authUsuario, UsuarioController.logout)
router.get('/productlist', ProductController.productList) 
router.get('/painel', authUsuario, 
PainelController.painel) 
router.post ('/painel', authUsuario, validarEditarPainel, 
PainelController.editarPainel)
router.get('/painelLogado', PainelController.painelLogado) 

router.get('/carrinho', CarrinhoController.carrinho) 

router.get('/adminrocket', validarLoginAdmin, AdminRocketController.adminRocket) 
router.post('/adminrocket', validarLoginAdmin, AdminRocketController.acaoLogin)

//Models

router.get('/endereco', EnderecoController.index);
router.get('/usuario', UsuarioController.index);
router.get('/pedidos', PedidosController.index);
router.get('/admin', AdminController.index);
router.get('/produtos', ProdutoController.listar);
router.get('/produtos/cadastrar', ProdutoController.cadastrar);
router.post('/produtos/cadastrar', ProdutoController.acaoCadastrar);
//router.get('/alterar/:idMarca', ProdutoController.editar);
//router.post('/alterar/:idMarca', ProdutoController.acaoEditar);
//router.get('/excluir/:idMarca', ProdutoController.excluir);


module.exports = router;
