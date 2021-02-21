const patientsDiseaseRecord = {};

module.exports = {
  insertPatientDisease: (cpf, disease) => {
    const now = new Date();

    const diseaseObj = {
      disease: disease,
      registerTime: now.toISOString(),
    };

    if (patientsDiseaseRecord.hasOwnProperty(cpf))
      patientsDiseaseRecord[cpf].unshift(diseaseObj);
    else patientsDiseaseRecord[cpf] = [diseaseObj];

    return diseaseObj;
  },

  fetchPatientDiseaseRecord: (cpf) => {
    return patientsDiseaseRecord[cpf];
  },
};
