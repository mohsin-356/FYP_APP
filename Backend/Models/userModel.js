const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please enter your full name'],
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone number'],
        maxlength: 15,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: 8,
        select: false, // Hide password in queries
    },
    cnic: {
        type: String,
        required: [true, 'Please provide your CNIC'],
        unique: true,
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        province: { type: String, required: true },
        postalCode: { type: String, required: true },
    },
    image: {
        type: String,
        default: 'user.jpg', // Default profile picture
    },
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Supplier', 'Worker'],
        default: 'Worker',
    },
    passwordChangedAt: { type: Date },
    passwordResetToken: { type: String },
    passwordResetTokenExpires: { type: Date },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
}, { timestamps: true });

// 🛠 **Password Hashing Middleware**
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🛠 **Query Middleware to Hide Inactive Users**
userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
});

// 🛠 **Password Match Method**
userSchema.methods.matchPassword = async function (password, passwordDB) {
    return await bcrypt.compare(password, passwordDB);
};

// 🛠 **Password Reset Token Generator**
userSchema.methods.createResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

const User = mongoose.model('users', userSchema);
module.exports = User;
