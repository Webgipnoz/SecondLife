//routing/index.js

const mainRoutes = require("./main");
const registerRoutes = require("./register");

module.exports = function (app) {
  mainRoutes(app);
  registerRoutes(app);
};
