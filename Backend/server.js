const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const { checkMe } = require("./utils/checkMe");

const app = express();
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://Admin:Admin@cluster0.obv47af.mongodb.net/secondlife?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db works");
  })
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/upload", checkMe, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

const routes = require("./routes/index");
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
