import express from "express";
import { UserController } from "../controllers/index.js";
import { handleValidationErrors, checkAuth } from "../utils/index.js";
import { loginValidation, registerValidation } from "../utils/validations.js";

const router = express.Router();

router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
router.get("/me", checkAuth, UserController.getMe);

export default router;
