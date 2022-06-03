const express = require("express");
const session = require("express-session");
const allRoutes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

const http = require("http");
const server = http.createServer(app);

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: true,
    sameSite: "strict",
    store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function () {
    server.listen(PORT, function () {
        console.log("Server listening on PORT " + PORT);
    });
});