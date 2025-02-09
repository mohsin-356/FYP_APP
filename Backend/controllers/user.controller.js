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
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res) => {
  console.log("\n");
  console.log(req.body);
  console.log("\n");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { userName, email, phone, password, role, cnic, address } = req.body;

        // ✅ Multer saves image in public/images, store only filename
        const image = req.file ? `/images/${req.file.filename}` : null;

        // ✅ Hash password before saving
        const hashedPassword = await userModel.hashPassword(password);

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
