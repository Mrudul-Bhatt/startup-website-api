const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partnerZoneSchema = new Schema(
  {
    orgType: { type: String, required: true },
    orgName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
    experience: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const partnerZone = mongoose.model("partnerZone", partnerZoneSchema);

module.exports = partnerZone;
