const { token } = require("morgan");
const User = require("../Models/userModel");
const asyncErrorHandler = require("../Utils/asyncErrorHandler");
// const sendMail = require("../Utils/email");
const customError = require("../Utils/customError");
// const jwt = require("jsonwebtoken");
const util = require("util");
// const crypto = require("crypto");
// const authController=require('./authController');

exports.addUser = async (req, res) => {
  const { userName, email, phone, password, role, cnic, address, image } =
    req.body;
    // const imagePath = "/images/upload/" + req.file.filename;
    try {
      const user = await User.create({
        userName,
        email,
        phone,
        password,
        role,
        cnic,
        address,
        image
      });
      res.status(201).json({
        status: "success",
        data: { user },
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
    
};
exports.updateUser = async (req, res) => {
  try {
      const { userName, email, phone, password, role, cnic, address,image } = req.body;
      // let image = req.body.image;

      // if (req.file) {
      //     image = "/images/upload/" + req.file.filename; // Update image if new one is uploaded
      // }

      const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { userName, email, phone, password, role, cnic, address, image },
          { new: true, runValidators: true }
      );

      if (!updatedUser) {
          return res.status(404).json({ status: "error", message: "User not found" });
      }

      res.status(200).json({ status: "success", data: updatedUser });
  } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
  }
};


exports.getUsers=async(req, res)=>{
  try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
}
}
exports.getUser=async(req, res)=>{
  //make the route to get the specific user data
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
    } catch (error) {
    res.status(404).json({ message: "User not found" });
    }
}
exports.deleteUser=async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
} catch (error) {
    res.status(500).json({ error: error.message });
}
}



