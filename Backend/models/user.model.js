const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//here we defien our user schema for uber driver
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['Admin', 'Manager', 'Supplier', 'Worker'] },
  cnic: { type: String, required: true, unique: true },
  address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      province: { type: String, required: true },
      postalCode: { type: String, required: true }
  },
  image: { type: String, default: null }, // Image URL
}, { timestamps: true });
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
// module.exports = mongoose.model("user", userSchema);

const  userModel= mongoose.model('User', userSchema);

module.exports = userModel;
