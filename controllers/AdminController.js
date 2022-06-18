const db = require('../models');

const AdminController = {
    index: (req, res) => {

    // findAll() para encontrar todos os dados registrados na tabela
    // A função findAll() retorna uma promise portanto, a usamos para pegar o resultado da pesquisa.
      db.Admin.findAll()
    // O resultado será atribuído no parâmetro desta função, aqui o chamamos de data.
      .then((data) => {
          res.send(JSON.stringify(data));
      }).catch((err) => {
          res.send(err);
      })
   }
}
module.exports = AdminController;