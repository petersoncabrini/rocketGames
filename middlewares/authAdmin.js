const authAdmin = (req, res, next) => {
    if('idAdmin' in req.session){
        next()
    } else {
        res.redirect("/adminrocket")
    }
}

module.exports = authAdmin