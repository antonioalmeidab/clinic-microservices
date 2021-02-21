const APIs = require("./axios");

const { patientAPI, diseaseAPI } = APIs;

module.exports = {
  fetchPatientRecord: async (cpf) => {
    const patientResponse = await patientAPI.get(`patients?cpf=${cpf}`);
    const diseaseResponse = await diseaseAPI.get(
      `patients/diseases?cpf=${cpf}`
    );

    const patientData = patientResponse.data;
    const diseaseData = diseaseResponse.data;

    patientData.diseaseHistory = diseaseData;

    console.log(patientData);
  },
};
