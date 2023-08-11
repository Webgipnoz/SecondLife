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

  app.post("/login", async (req, res) => {
    try {
      const user = await UserModel.findOne({ name: req.body.name });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User is not found",
        });
      }

      const isValidPwd = user.pwd === req.body.pwd;
      if (!isValidPwd) {
        return res.status(401).json({
          success: false,
          message: "Incorrect password",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Login successful",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "An error occurred",
      });
    }
  });

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
