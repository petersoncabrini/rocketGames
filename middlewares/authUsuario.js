const authUsuario = (req, res, next) => {
    if('idUsuario' in req.session){
        next()
    } else {
        res.redirect("/login")
    }
}

module.exports = authUsuario