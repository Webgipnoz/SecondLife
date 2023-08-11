const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const routes = require("./routes/index");
routes(app);

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
