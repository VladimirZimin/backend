const express = require("express");

const { getDrugstore, updateFavorite } = require("../../controllers/drugstore");

const router = express.Router();

router.get("/", getDrugstore);
router.patch("/:id/favorite", updateFavorite);

module.exports = router;
