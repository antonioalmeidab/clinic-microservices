const express = require("express");
const bodyParser = require("body-parser");
const patientsRecord = require("./patientsRecord");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/patients", (req, res) => {
  patientsRecord.insertPatient(req.body);
  res.status(200).send(`Patient ${req.body.name} registered`);
});

app.get("/patients", (req, res) => {
  res.json(patientsRecord.fetchPatient(req.query.cpf));
});

app.listen(port);
