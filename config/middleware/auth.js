module.exports = (req, res, next) => {
    if (req.session.userAuth && req.session.userAuth._id) {
        next();
    } else {
        res.redirect("/");
    }
}