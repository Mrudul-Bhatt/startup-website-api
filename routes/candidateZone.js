const router = require("express").Router();
let candidateZone = require("../models/candidateZone.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const contact = Number(req.body.contact);
  const fatherName = req.body.fatherName;
  const education = req.body.education;
  const panNumber = Number(req.body.panNumber);
  const aadharNumber = Number(req.body.aadharNumber);
  const location = req.body.location;
  const lastSalary = Number(req.body.lastSalary);
  const lastCompany = req.body.lastCompany;

  const newCandidate = new candidateZone({
    name,
    email,
    contact,
    fatherName,
    education,
    panNumber,
    aadharNumber,
    location,
    lastSalary,
    lastCompany,
  });

  newCandidate
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
