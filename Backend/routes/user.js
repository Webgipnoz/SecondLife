const express = require("express");

const userController = require("../controllers/userController.js");
const { checkMe } = require("../utils/checkMe.js");

module.exports = function (app) {
  app.use(express.json());

  app.post("/login", userController.login);
  app.post("/register", userController.register);
  app.get("/me", checkMe, userController.getMe);
};
