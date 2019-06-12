const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");
const Users = require("../users/users-model.js");

function generateToken(user) {
  return (
    jwt.sign({
      userId: user.id
    }),
    secrets.jwt,
    {
      expiresIn: "1h"
    }
  );
}

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);

      res.status(201).json({
        message: `Welcome ${saved.username}!`,
        authToken: token
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}`,
          authToken: token
        });
      } else {
        res.status(401).json({
          message: "Invalid credentials"
        });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
