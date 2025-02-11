const { token } = require("morgan");
const ProductModel = require("../Models/productModel");
exports.addProduct = async (req, res) => {
  const {
    productName,
    description,
    price,
    stock,
    sku,
    image,
    brand,
    weight,
    dimensions,
    inProduction,
    category,
  } = req.body;

  try {
    // 🛠 Create New Product
    const product = await ProductModel.create({
      productName,
      description,
      price,
      stock,
      sku,
      image,
      brand,
      weight,
      dimensions,
      inProduction,
      category,
    });

    // ✅ Success Response
    res.status(201).json({
      status: "success",
      data: { product },
    });
  } catch (error) {
    // ❌ Error Handling
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
