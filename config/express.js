const express = require('express');
const session = require('express-session');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');

const config = require("./index");

// Routes
const {
    testRoute,
} = require("./routes");

// Middlewares
const {
    notFound,
} = require("./middleware");

// controllers
const {
    homeCtrl,
    accountCtrl
} = require("../app/controllers");

module.exports = (app) => {
    app.set('views', config.ROOT + '/app/views');
    app.set("view engine", "ejs");

    // Config for session
    app.set('trust proxy', 1) // trust first proxy
    app.use(cookieSession({
        name: 'session',
        keys: ['key1', 'key2']
    }))


    app.use(session())
    app.use(express.static(config.ROOT + '/assets'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use("/test", testRoute)

    app.use(notFound);
}
