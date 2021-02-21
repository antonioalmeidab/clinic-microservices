const axios = require("axios");

const patientAPI = axios.create({ baseURL: "http://localhost:3000/" });
const diseaseAPI = axios.create({ baseURL: "http://localhost:4000/" });

module.exports = { patientAPI, diseaseAPI };
