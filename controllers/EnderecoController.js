const db = require('../models');

const EnderecoController = {
    index: async (req, res) => {

      const Endereco = await db.Endereco.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = EnderecoController;
