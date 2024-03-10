const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const cartSchema = new Schema(
  {
    id: String,
    product: {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      photo: String,
    },
  },
  { versionKey: false, timestamps: true }
);

cartSchema.post("save", handleMongooseError);

const Cart = model("cart", cartSchema);

module.exports = {
  Cart,
};
