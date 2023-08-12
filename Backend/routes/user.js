const express = require("express");
const mongoose = require("mongoose");

const userController = require("../controllers/userController.js");
const { checkMe } = require("../utils/checkMe.js");

mongoose
  .connect(
    "mongodb+srv://Admin:Admin@cluster0.obv47af.mongodb.net/secondlife?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db works");
  })
  .catch((err) => console.log(err));

module.exports = function (app) {
  app.use(express.json());

  app.post("/login", userController.login);
  app.post("/register", userController.register);
  app.get("/me", checkMe, userController.getMe);
};
