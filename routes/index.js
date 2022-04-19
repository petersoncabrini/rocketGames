var express = require('express');
var router = express.Router();
const ProductController = require ('../controllers/ProductController')

/* GET home page. */
router.get('/', (req, res) => {
  res.render("Página Home")
})

router.get('/product', (req, res) => {
  res.render("product")
})

router.get('/finalizarCompra', (req, res) => {
  res.render("finalizarCompra")
})

router.get('/sucesso', (req, res) => {
  res.render("sucesso")
})

router.get('/login', (req, res) => {
  res.render("login")
})

module.exports = router;
