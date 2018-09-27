const index = (req, res) => {
    res.render("test/chat/index", {
        userAuth: req.session.userAuth
    });
}

module.exports = {
    index,
}