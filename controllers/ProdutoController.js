const db = require('../models');

const ProdutoController = {
    index: async (req, res) => {

      const Produto = await db.Produto.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = ProdutoController; 
