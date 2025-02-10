const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("../controllers/user.controller");
const upload = require("../middlewares/upload.middleware");

// User Registration Route with Multer for Image Upload
router.post(
    "/register",
    upload.single("image"), // Middleware for image upload
    [
        check("email").isEmail().withMessage("Please enter a valid email address"),
        check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        check("userName").isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),
    ],
    userController.registerUser
);
router.put('update-picture',upload.singleUpload,userController.updateProfilePicController);
module.exports = router;


