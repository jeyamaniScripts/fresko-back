import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoryProducts = async (req, res) => {
  try {
    const { category } = req.params;
    const data = await Product.find({ category });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTopSelling = async (req, res) => {
  try {
    console.log(req);

    const products = await Product.find().sort({ soldCount: -1 }).limit(10);
    console.log(products);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMostRated = async (req, res) => {
  try {
    const products = await Product.find().sort({ rating: -1 }).limit(10);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTrending = async (req, res) => {
  try {
    const products = await Product.find().sort({ views: -1 }).limit(10);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBestDiscounts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ discountPercent: -1 })
      .limit(10);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecommended = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({
        rating: -1,
        soldCount: -1,
        discountPercent: -1,
      })
      .limit(10);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
