const db = require('../models');

const AdminController = {
    index: (req, res) => {

      db.Admin.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = AdminController;