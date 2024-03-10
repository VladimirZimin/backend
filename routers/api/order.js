const express = require("express");

const { addOrders } = require("../../controllers/order");

const router = express.Router();

router.post("/", addOrders);

module.exports = router;
