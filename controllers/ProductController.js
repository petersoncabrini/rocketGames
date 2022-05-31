const ProductController = {
    product: function(req, res){
        res.render('product');
    },
    productList: (req, res) => {
        res.render('productlist');
    }
}

module.exports = ProductController;