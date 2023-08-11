const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const UserModel = require("../models/users.js");

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

  app.post("/register", async (req, res) => {
    const existingUser = await UserModel.findOne({ name: req.body.name });
    if (existingUser) {
      res.json({
        success: false,
        message: "User with this name already exists.",
      });
      return;
    }

    const doc = new UserModel({
      name: req.body.name,
      pwd: req.body.pwd,
    });

    const user = await doc.save();

    res.json(user);
  });
};
