const patients = {};

module.exports = {
  insertPatient: (patientData) => {
    patients[patientData.cpf] = patientData;
  },

  fetchPatient: (cpf) => {
    return patients[cpf];
  },
};
