const router = require("express").Router();
let contactUs = require("../models/contactUs.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const message = req.body.message;

  const newContact = new contactUs({
    name,
    email,
    phone,
    message,
  });

  newContact
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
