const express = require("express");
const cors = require("cors");
const server = express();
const routes = require("./routes");
const authMiddleware = require("./auth");

server.use(cors());
server.use(express.urlencoded({ extended: true, strict: false }));
server.use(express.json());
server.use(authMiddleware);

server.post("/v1/action", routes.doSomething);
server.get("/", routes.getStatus);

module.exports = server;
