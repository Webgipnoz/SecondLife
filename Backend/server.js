import express from "express";
import fs from "fs";
import multer from "multer";
import cors from "cors";
import mongoose from "mongoose";
import { authRoutes, postRoutes } from "./routes/index.js";

mongoose
  .connect("mongodb+srv://Admin:Admin@cluster0.djv28ee.mongodb.net/")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// use routes
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
