const { Drugstore } = require("../models/drugstore");
const { HttpError } = require("../helpers");

const getDrugstore = async (req, res, next) => {
  try {
    const result = await Drugstore.find({}, "-createdAt -updatedAt");
    res.json({ status: "success", code: 200, data: result });
  } catch (error) {
    next(error);
  }
};

const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { medicineId, favorite } = req.body;

    const drugstore = await Drugstore.findById(id);

    if (!drugstore) {
      throw HttpError(404, "Not found");
    }

    const medicineToUpdate = drugstore.medicines.find(
      (medicine) => medicine.id === medicineId
    );

    if (!medicineToUpdate) {
      throw HttpError(404, "Not found");
    }

    medicineToUpdate.favorite = favorite;

    await drugstore.save();

    res.json(drugstore);
  } catch (error) {
    next(error);
  }
};

module.exports = { getDrugstore, updateFavorite };
