import express from "express";
import {
  addProduct,
  getProducts,
  getCategoryProducts,
  getTopSelling,
  getMostRated,
  getTrending,
  getBestDiscounts,
  getRecommended,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add", addProduct);
router.get("/", getProducts);
router.get("/category/:category", getCategoryProducts);

router.get("/top-selling", getTopSelling);
router.get("/most-rated", getMostRated);
router.get("/trending", getTrending);
router.get("/best-discounts", getBestDiscounts);
router.get("/recommended", getRecommended);

export default router;
