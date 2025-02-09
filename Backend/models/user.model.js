const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//here we defien our user schema for uber driver
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Too short, min is 3 characters"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Too short, min is 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [5, "Too short, min is 6 characters"]
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  }
});
//creating some methods for the user schema
userSchema.methods.generateAuthToken =function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

//exporting the user schema
module.exports = mongoose.model("user", userSchema);
