const router = require("express").Router();
let candidateZone = require("../models/candidateZone.model");

/*router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});*/

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
/*
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
*/
module.exports = router;
