const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      require: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
