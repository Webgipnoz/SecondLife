const express = require("express");
const mongoose = require("mongoose");

const postController = require("../controllers/postController.js");
const { checkMe } = require("../utils/checkMe.js");

module.exports = function (app) {
  app.use(express.json());

  app.get("/posts", postController.getAll);
  app.get("/posts/:id", postController.getOne);
  app.post("/posts", checkMe, postController.create);
  app.delete("/posts/:id", checkMe, postController.remove);
  app.patch("/posts/:id", checkMe, postController.update);
};
