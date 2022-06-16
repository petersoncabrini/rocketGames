const db = require('../models');

const TipoConsoleController = {
    index: (req, res) => {

      db.TipoConsole.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = TipoConsoleController;