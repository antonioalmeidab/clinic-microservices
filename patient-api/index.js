const express = require("express");
const bodyParser = require("body-parser");
const patientsRecord = require("./patientsRecord");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/", (req, res) => {
  try {
    const patientData = {
      name: req.body.name,
      cpf: req.body.cpf,
      age: req.body.age,
      address: req.body.address,
      treatmentType: req.body.treatmentType
    };

    patientsRecord.insertPatient(patientData);

    res.status(200).send(`Patient ${patientData.name} registered`);
  } catch {
    res.status(400).send("Missing patient data");
  }
});

app.get("/", (req, res) => {
  res.json(patientsRecord.fetchPatient(req.query.cpf));
});

app.listen(port);
