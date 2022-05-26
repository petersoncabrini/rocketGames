const PainelLogadoController = {
    logado: function (req, res) {
        if (req.session.idUsuario === undefined) {
            res.redirect('/login');
        } else {
            res.render('painelLogado', {
                nomeUsuario: req.session.nomeUsuario,
                emailUsuario: req.session.emailUsuario,
                idUsuario: req.session.idUsuario
            });
        }
    }
}

module.exports = PainelLogadoController;
