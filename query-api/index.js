const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/patients", (req, res) => {
  const cpf = req.query.cpf;

  res.json(controller.fetchPatientRecord(cpf));
});

app.listen(port);
