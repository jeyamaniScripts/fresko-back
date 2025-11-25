import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true }, // Vegetable | Fruit | Dairy
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    quantity: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    image: { type: String, required: true },

    // Additional helpful fields
    soldCount: { type: Number, default: 0 }, // For "Top Selling"
    views: { type: Number, default: 0 }, // For "Trending Now"
    discountPercent: { type: Number, default: 0 }, // Auto-calculated
  },
  { timestamps: true }
);

// Auto-calc discount
productSchema.pre("save", function (next) {
  this.discountPercent = Math.round(
    ((this.price - this.offerPrice) / this.price) * 100
  );
  next();
});

export default mongoose.model("Product", productSchema);
