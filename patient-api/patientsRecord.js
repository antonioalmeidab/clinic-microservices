const patients = {};

module.exports = {
  insertPatient: (patientData) => {
    patients[patientData.cpf] = patientData;

    console.log(patients);
  },

  fetchPatient: (cpf) => {
    return patients[cpf];
  },
};
