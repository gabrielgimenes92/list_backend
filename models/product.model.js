const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please enter a product name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", ProductSchema)

model.export = Product;