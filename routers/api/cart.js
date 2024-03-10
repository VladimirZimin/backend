const express = require("express");

const { addToCart, getOrders } = require("../../controllers/cart");

const router = express.Router();

router.post("/", addToCart);
router.get("/", getOrders);

module.exports = router;
