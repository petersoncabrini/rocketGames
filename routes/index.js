var express = require('express');
var router = express.Router();
const ProductController = require ('../controllers/ProductController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', (req, res) => {
  res.render("product")
})

module.exports = router;
