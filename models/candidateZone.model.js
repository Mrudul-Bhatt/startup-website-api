const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const candidateZoneSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    fatherName: { type: String, required: true },
    education: { type: String, required: true },
    panNumber: { type: Number, required: true },
    aadharNumber: { type: Number, required: true },
    location: { type: String, required: true },
    lastSalary: { type: Number, required: true },
    lastCompany: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const candidateZone = mongoose.model("candidateZone", candidateZoneSchema);

module.exports = candidateZone;
