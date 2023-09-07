const userRoutes = require("./user");
const postRoutes = require("./post");

module.exports = function (app) {
  userRoutes(app);
  postRoutes(app);
};
