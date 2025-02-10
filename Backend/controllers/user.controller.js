// //requiring the user model
// const userModel = require("../models/user.model");
// //require the user service
// const userService = require("../services/user.service");
// //require the express-validator
// const { validationResult } = require("express-validator");
// //blacklistedTokenModel requiring
// const blackListTokenModel = require("../models/blacklistToken.model");

// module.exports.registerUser = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {

//     const { userName, email,phone,password,role,cnic,address,image} = req.body;
//     const hashedPassword = await userModel.hashPassword(password);
//     const user = await userService.createUser({
//      userName,
//       email,
//       phone,
//       password: hashedPassword,
//       role,
//       cnic,
//       street: address.street,
//       city: address.city,
//       state: address.state,
//       province: address.province,
//       postalCode: address.postalCode,
//       image
//     });
//     const isUserExist = await userModel.findOne({ email });
//     if (isUserExist) {
//       return res.status(400).json({ message: "Email already exists" });
//     }
//     const token = await user.generateAuthToken(user);
//     return res.status(201).json({ token, user });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
// module.exports.loginUser = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(401).json({ message: "Invalid Email or Password" });
//     }
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid Email or Password" });
//     }
//     const token = await user.generateAuthToken(user);
//     res.cookie("token", token);
//     return res.status(200).json({ token, user });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
// module.exports.getUserProfile = async (req, res, next) => {
//   res.status(200).json({ user: req.user });
// };
// module.exports.logoutUser = async (req, res, next) => {
//   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
//   await blackListTokenModel.create({ token });
//   res.clearCookie("token");
//   return res.status(200).json({ message: "Logged out" });
// };
// const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const cloudinary= require('cloudinary');

module.exports.registerUser = async (req, res) => {
  console.log("\n===== Incoming Request =====\n");
  console.log("Request Body:", req.body); // ✅ Debug Body
  console.log("\n===========================\n");

  if (!req.file) {
      return res.status(400).json({ message: "Image upload failed!" });
  }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { userName, email, phone, password, role, cnic, address } = req.body;
        console.log(userName, email, phone, password, role, cnic, address);

        // ✅ Multer saves image in public/images, store only filename
        const image = req.file ? `/images/${req.file.filename}` : null;
console.log("multered image"+image);
        // ✅ Hash password before saving
        const hashedPassword = await userModel.hashPassword(password);
        console.log("hashed password"+hashedPassword);
        // ✅ Check if user already exists
        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // ✅ Save user in database
        const user = await userService.createUser({
            userName,
            email,
            phone,
            password: hashedPassword,
            role,
            cnic,
            street: address.street,
            city: address.city,
            state: address.state,
            province: address.province,
            postalCode: address.postalCode,
            image, // ✅ Store image path
        });

        const token = await user.generateAuthToken(user);
        return res.status(201).json({ token, user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updateProfilePicController = async (req, res) => {
    try {
    //   const user = await userModel.findById(req.user._id);
      // file get from client photo
      const file = getDataUri(req.file);
      // delete prev image
    //   await cloudinary.v2.uploader.destroy(user.profilePic.public_id);
      // update
      const cdb = await cloudinary.v2.uploader.upload(file.content);
      user.profilePic = {
        public_id: cdb.public_id,
        url: cdb.secure_url,
      };
      // save func
      await user.save();
  
      res.status(200).send({
        success: true,
        message: "profile picture updated",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In update profile pic API",
        error,
      });
    }
  };