const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
mongoose
  .connect(
    "mongodb+srv://mrudul:1810138@cluster0-hdaz0.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const candidateZoneRouter = require("./routes/candidateZone");
//const usersRouter = require("./routes/users");

app.use("/candidateZone", candidateZoneRouter);
//app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
