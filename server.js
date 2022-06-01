const express = require("express");
const allRoutes = require("./controllers");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;

// const { v4: uuidv4 } = require("uuid");
const http = require("http");
const server = http.createServer(app);

// Requiring our models for syncing
// const { Friend, Game, GameInstance, Ranking, User } = require("./models");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

sequelize.sync({ force: false }).then(function () {
    server.listen(PORT, function () {
        console.log("Server listening on PORT " + PORT);
    });
});