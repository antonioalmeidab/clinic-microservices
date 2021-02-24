const axios = require("axios");

const patientAPI = axios.create({ baseURL: process.env.PATIENT_API_URL });
const diseaseAPI = axios.create({ baseURL: process.env.DISEASE_API_URL });

module.exports = { patientAPI, diseaseAPI };
