const db = require('../models');

const ProdutoController = {
    index: (req, res) => {
        db.Produto.findAll().then((produtos) => {
            res.render("produtos", {
                listaProdutos: produtos
            });
        }).catch((err) => {
            res.send("erro de consulta");
        });
    },
    produto: async (req, res) => {
        const idProduto = req.params.idProduto;
        const produto = await db.Produto.findByPk(idProduto);

        res.send(produto);
    }
};

module.exports = ProdutoController;
