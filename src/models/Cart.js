const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./Products");
require("./User");

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    products: [
      {
        _id: false,
        product: { type: Schema.Types.ObjectId, ref: "Products", required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    payment: { type: String, required: true },
    receipt: { type: Number, required: true },
    status: { type: String, enum: ['PENDING', 'SHIPPING', 'SUCCESS', 'CANCELLED'], default: 'PENDING' },
  },
  {
    collection: "carts",
    timestamps: true,
  }
);

module.exports = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
