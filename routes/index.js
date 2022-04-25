var express = require('express');
var router = express.Router();
const ProductController = require ('../controllers/ProductController')
const HomeController = require ('../controllers/HomeController')

/* GET home page. */
router.get('/home', (req, res) => {
  res.render("home")
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
