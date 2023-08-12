//routing/index.js

const mainRoutes = require("./main");
const userRoutes = require("./user");
const postRoutes = require("./post");

module.exports = function (app) {
  mainRoutes(app);
  userRoutes(app);
  postRoutes(app);
};
