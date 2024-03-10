const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const drugstoreSchema = Schema(
  {
    name: String,
    medicines: [
      {
        name: String,
        price: Number,
        quantity: Number,
        photo: String,
        id: String,
        favorite: Boolean,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

drugstoreSchema.post("save", handleMongooseError);

const Drugstore = model("drugstore", drugstoreSchema);

module.exports = {
  Drugstore,
};
