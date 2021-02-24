const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const cpf = req.query.cpf;

  const patientRecord = await controller.fetchPatientRecord(cpf);

  res.json(patientRecord);
});

app.listen(port);
