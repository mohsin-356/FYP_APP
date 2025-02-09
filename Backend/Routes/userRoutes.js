// const authController=require('../Controllers/authController');
const userController=require('../Controllers/userController');

const express = require('express');
const router = express.Router();
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// Multer setup for uploading images
const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
      cb(null, './public/images/upload');
    },
    filename: function(req, file, cb)
    {
      crypto.randomBytes(12,function(err,bytes)
      {
        const fn=bytes.toString('hex')+path.extname(file.originalname);
        cb(null, fn);
      });
    },
  });
  const upload = multer({ storage: storage });


// router.route("/addUser").post(userController.addUser);
router.route("/addUser").post(upload.single("image"), userController.addUser);

// router.route("/getAllUsers")
//             .get(
//                 userController.getAllUsers
//                 );

// router.route("/updatePassword")
//             .patch(
//                 authController.protect,
//                 userController.updatePassword
//                 );

// router.route("/updateMe")
//             .patch(
//                 authController.protect,
//                 userController.updateMe
//             );

// router.route("/deleteMe")
//             .delete(
//                 authController.protect,
//                 userController.deleteMe
//             );
            
module.exports = router;