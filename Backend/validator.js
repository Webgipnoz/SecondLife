import { body } from "express-validator";

// Validation for user login
export const loginValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({
    min: 5,
  }),
];

// Validation for user registration
export const registerValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({
    min: 5,
  }),
  body("fullName", "Please provide a name").isLength({ min: 3 }),
  body("avatarUrl", "Invalid avatar URL").optional().isURL(),
];

// Validation for creating a post
export const postCreateValidation = [
  body("title", "Enter a title for the post").isLength({ min: 3 }).isString(),
  body("text", "Enter text for the post").isLength({ min: 3 }).isString(),
  body("tags", "Invalid tag format").optional().isString(),
  body("imageUrl", "Invalid image URL").optional().isString(),
];
