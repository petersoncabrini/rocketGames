const db = require('../models');

const TipoProdutoController = {
    index: (req, res) => {

      db.TipoProduto.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = TipoProdutoController;