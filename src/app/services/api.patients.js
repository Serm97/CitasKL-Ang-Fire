var express = require('express');
var app = express();
// import { PatientService } from '/patient.services';

// patientService: PatientService = new PatientService();

app.get('/', function (req, res) {
  res.send('patientService.getPatients()');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});