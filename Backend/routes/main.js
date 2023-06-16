// routing/main
const fs = require("fs");
const cors = require("cors");

module.exports = function (app) {
  app.use(cors());

  app.get("/", (req, res) => {
    if (req.query.path === "posts") {
      const filePath = "./files/posts.json";
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(fileContent);
        res.json(jsonData);
      }
    }
  });
};
