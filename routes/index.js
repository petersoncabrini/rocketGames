var express = require('express');
var router = express.Router();
const ProductController = require ('../controllers/ProductController')
const HomeController = require ('../controllers/HomeController')


router.get('/home', HomeController.apresentar) 

router.get('/product', ProductController.product) 


router.get('/finalizarCompra', (req, res) => {
  res.render("finalizarCompra")
})

router.get('/sucesso', (req, res) => {
  res.render("sucesso")
})

router.get('/login', (req, res) => {
  res.render("login")
})

router.get('/productlist', (req, res) => {
  res.render("productlist")
})

router.get('/painel', (req, res) => {
  res.render("painel")
})

router.get('/carrinho', (req, res) => {
  res.render("carrinho")
})

module.exports = router;
