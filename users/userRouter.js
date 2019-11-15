const express = require("express");

const Users = require("./usersModel.js");

const router = express.Router();

router.get("/users", (req, res) => {
  Users.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get user" });
    });
});

router.post("/users", (req, res) => {
  const user = req.body;
  Users.insert(user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to post" });
    });
});

module.exports = router;
