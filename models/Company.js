const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    ubicacion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    anioFundacion: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);
