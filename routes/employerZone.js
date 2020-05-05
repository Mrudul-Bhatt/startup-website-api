const router = require("express").Router();
let employerZone = require("../models/employerZone.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const contact = Number(req.body.contact);
  const companyName = req.body.companyName;
  const post = req.body.post;
  const city = req.body.city;
  const letUsKnow = req.body.letUsKnow;

  const newEmployer = new employerZone({
    name,
    contact,
    companyName,
    post,
    city,
    letUsKnow,
  });

  newEmployer
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
