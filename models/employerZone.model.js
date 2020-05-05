const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employerZoneSchema = new Schema(
  {
    name: { type: String, required: true },
    contact: { type: Number, required: true },
    companyName: { type: String, required: true },
    post: { type: String, required: true },
    city: { type: String, required: true },
    letUsKnow: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const employerZone = mongoose.model("employerZone", employerZoneSchema);

module.exports = employerZone;
