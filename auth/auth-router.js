const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");
const Users = require("../users/users-model.js");

module.exports = router;
