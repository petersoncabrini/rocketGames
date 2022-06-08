const db = require('../models');

const EnderecoController = {
    index: (req, res) => {

      db.Endereco.findAll().then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
      
        //res.render('home');
   }
}
module.exports = EnderecoController;
