const { token } = require("morgan");
const ProductModel = require("../Models/productModel");
exports.addProduct = async (req, res) => {
    try {
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
  
      // ✅ Convert numeric fields to Number (if they are not empty)
      const productData = {
        productName,
        description,
        price: price ? Number(price) : 0, // Ensure it's a number
        stock: stock ? Number(stock) : 0, // Ensure it's a number
        sku,
        image,
        brand,
        weight: weight ? Number(weight) : 0, // Ensure it's a number
        dimensions: {
          length: dimensions?.length ? Number(dimensions.length) : 0,
          width: dimensions?.width ? Number(dimensions.width) : 0,
          height: dimensions?.height ? Number(dimensions.height) : 0,
        },
        inProduction: Boolean(inProduction), // Ensure it's a boolean
        category,
      };
  
      // 🛠 Create the new product
      const product = await ProductModel.create(productData);
  
      // ✅ Success Response
      res.status(201).json({
        status: "success",
        data: { product },
      });
    } catch (error) {
      console.error("🔥 Error in addProduct:", error);
      return res.status(400).json({
        status: "error",
        message: error.message,
        details: error,
      });
    }
  };
  exports.getProducts=async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
  }
  