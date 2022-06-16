const db = require('../models');

const PedidosController = {
    index: async (req, res) => {

      const Pedidos = await db.Pedidos.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = PedidosController; 
