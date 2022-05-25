const ProductListController = {
    productList: function(req, res){
if(req.session.idUsuario === undefined){
    res.redirect('/login');
}else{

        res.render('productlist', {
            nomeUsuario: req.session.nomeUsuario,
            emailUsuario: req.session.emailUsuario,
            idUsuario: req.session.idUsuario
        });
    }
    }
}

module.exports = ProductListController