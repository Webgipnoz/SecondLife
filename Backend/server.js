const express = require("express");
const app = express();
const port = 5000;

const routes = require("./routes/index");
routes(app);

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
