const router = require('express').Router();

// controllers
const {
    homeCtrl,
    accountCtrl,
    chatCtrl
} = require("../../app/controllers/test");

// Middlewares
const {
    auth
} = require("../middleware");


router.get("/", homeCtrl.index);
router.all("/login", accountCtrl.login);
router.get("/logout", accountCtrl.logout);
router.all("/register", accountCtrl.register);
router.get("/chat", auth, chatCtrl.index);


module.exports = router;