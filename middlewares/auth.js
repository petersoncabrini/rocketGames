const auth = (req, res, next) => {
    if('userLogin' in req.session && req.session.userLogin != ""){
        console.log(req.session)
        next()
    } else {
        res.redirect("/login")
    }
}

module.exports = auth