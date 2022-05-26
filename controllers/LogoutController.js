const LogoutController = {
    logout: (req, res) => {
        req.session.destroy();
       res.redirect('home');
   }
}
module.exports = LogoutController;