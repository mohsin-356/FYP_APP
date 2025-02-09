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

