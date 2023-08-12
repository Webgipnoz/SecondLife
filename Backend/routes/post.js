const express = require("express");
const mongoose = require("mongoose");

const postController = require("../controllers/postController.js");

module.exports = function (app) {
  app.use(express.json());

  //   app.get("/posts", postController.getAll);
  //   app.get("/posts/:id", postController.getOne);
  app.post("/posts", postController.create);
  //   app.delete("/posts", postController.remove);
  //   app.patch("/posts", postController.update);
};
