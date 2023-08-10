import { userInfo } from "os";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pwdHash: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
