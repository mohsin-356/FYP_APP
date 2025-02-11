const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters"],
      maxlength: [100, "Product name must be at most 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    sku: {
      type: String,
      required: [true, "SKU is required"],
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      default: "default-product.jpg", // Placeholder image
    },
    brand: {
      type: String,
      required: true,
      default: "MEFCO", // Default brand
    },
    weight: {
      type: Number,
      min: [0, "Weight must be a positive number"],
    },
    dimensions: {
      length: { type: Number, required: true, min: 0 },
      width: { type: Number, required: true, min: 0 },
      height: { type: Number, required: true, min: 0 },
    },
    inProduction: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Thermostat", "Element", "Other"], // Allowed categories
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// 🛠 **Product Model**
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
