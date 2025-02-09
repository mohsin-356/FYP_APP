// const express = require("express");
// const router = express.Router();
// const { check } = require("express-validator");
// //require the user controller
// const userController = require("../controllers/user.controller");
// const { route } = require("../app");
// const authMiddleware = require("../middlewares/auth.middleware");
// router.post(
//   "/register",
//   [
//     check("email").isEmail().withMessage("Please enter a valid email address"),
//     check("password")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters long"),
//     check("fullname.firstname")
//       .isLength({ min: 3 })
//       .withMessage("First name must be at least 3 characters long"),
//   ],
//   userController.registerUser
// );
// module.exports = router;


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

module.exports = router;


