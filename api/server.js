const express = require("express");

const userRouter = require("../users/userRouter.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", environment: process.env.DB_ENV });
});

server.get("/users", (req, res) => {
  Users.getAll()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.use("/api", userRouter);

module.exports = server;
