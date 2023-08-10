const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Admin:Admin@cluster0.obv47af.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db ok");
  })
  .catch((err) => console.log(err));

module.exports = function (app) {
  app.use(express.json());

  app.post("/register", (req, res) => {
    if (!req.body.pwd || !req.body.name) {
      res.json({ success: false });
    } else res.json({ success: true });
  });
};
