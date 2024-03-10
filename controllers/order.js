const { HttpError } = require("../helpers");
const { Order } = require("../models/order");

const addOrders = async (req, res, next) => {
  try {
    const order = req.body;

    if (!order.product) {
      throw HttpError(400, "Product is required");
    }

    const result = await Order.create(order);
    res.status(201).json({ status: "success", code: 201, data: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = { addOrders };
