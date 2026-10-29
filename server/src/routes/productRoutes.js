
const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET all active products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ isArchived: false });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products." });
  }
});

// GET products by category
router.get("/category/:category", async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.category,
      isArchived: false,
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch category products." });
  }
});

module.exports = router;
