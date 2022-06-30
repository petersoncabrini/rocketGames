const db = require('../models');

const ProdutoController = {
    listar: (req, res) => {
        db.Produto.findAll().then((produtos) => {
            res.render("admin/produtos/index", {
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
    },
    cadastrar: (req, res) => {
        res.render("admin/produtos/form", { formAction: "/produtos/cadastrar" });
    },

    acaoCadastrar: async (req, res) => {
        const { nome, tipoconsole, tipoproduto, preco } = req.body;

        await db.Produto.create({
            nome: nome,
            tipoconsole: tipoconsole,
            tipoproduto: tipoproduto,
            preco: preco
        })

        res.redirect("/produtos");
    },

  /*  editar: async (req, res) => {
        const { idProduto } = req.params;

        const produto = await db.Produto.findByPk(idProduto);

        res.render("ProdutoEditar", {
            formAction: "alterar" + idProduto,
            produto: produto,
            
        })

    },
    acaoEditar: async(req, res) => {
        const { nome, tipoconsole, tipoproduto, preco } = req.body;
        const { idProduto } = req.params;

        await db.Produto.update({
            nome: nome,
            tipoconsole: tipoconsole,
            tipoproduto: tipoproduto,
            preco: preco
        }, { where: {
            id: idProduto
        }});

        res.redirect("/produtos/editar");
    },
*/
}

module.exports = ProdutoController;
