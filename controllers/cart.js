const { HttpError } = require("../helpers");
const { Cart } = require("../models/cart");

const addToCart = async (req, res, next) => {
  try {
    const medicine = req.body;

    const { id } = req.body.product;
    const drug = await Cart.findOne({ "product.id": id });

    if (drug && drug.product.id === id) {
      throw HttpError(409, "Medicine already added to cart");
    }

    const result = await Cart.create(medicine);
    res.status(201).json({ status: "success", code: 201, data: { result } });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const result = await Cart.find();
    res.status(200).json({ status: "success", code: 200, data: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = { addToCart, getOrders };
