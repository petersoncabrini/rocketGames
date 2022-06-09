const db = require('../models');

const UsuarioController = {
    index: (req, res) => {

      db.Usuario.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = UsuarioController;