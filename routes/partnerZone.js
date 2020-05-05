const router = require("express").Router();
let partnerZone = require("../models/partnerZone.model");

router.route("/add").post((req, res) => {
  const orgType = req.body.orgType;
  const orgName = req.body.orgName;
  const name = req.body.name;
  const email = req.body.email;
  const contact = Number(req.body.contact);
  const experience = req.body.experience;

  const newPartner = new partnerZone({
    orgType,
    orgName,
    name,
    email,
    contact,
    experience,
  });

  newPartner
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
