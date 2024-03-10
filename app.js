const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const drugstoreRouter = require("./routers/api/drugstore");
const cartRouter = require("./routers/api/cart");
const orderRouter = require("./routers/api/order");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/drugstores", drugstoreRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    status: "fail",
    code: 500,
    message: message,
    data: "Internal Server Error",
  });
});

module.exports = app;
