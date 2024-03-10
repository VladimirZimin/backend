const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const orderSchema = new Schema(
  {
    product: [
      {
        id: String,
        name: String,
        price: Number,
        quantity: Number,
        photo: String,
      },
    ],
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    total: Number,
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = {
  Order,
};
