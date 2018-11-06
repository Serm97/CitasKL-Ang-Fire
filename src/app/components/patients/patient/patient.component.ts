import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/models/patient'; //Importar Clase Patient
import { PatientService } from 'src/app/services/patient.service'; //Importar Servicio

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients();
    this.resetForm();
  }

  // Enviar datos de Formulario
  onSubmit(patientForm: NgForm){
    if(patientForm.value.$key == null){
      this.patientService.insertPatient(patientForm.value);
      alert('Patient ' + this.patientService.selectedPatient.name + ' ha sido creado.');
    }else{
      this.patientService.updatePatient(patientForm.value);
      alert('Patient ' + this.patientService.selectedPatient.name + ' ha sido actualizado.');
    }   
    
    this.resetForm(patientForm);
    
  }


  // Limpiar Formulario
  resetForm(patientForm?: NgForm){
    if (patientForm != null) {
      patientForm.reset();
      this.patientService.selectedPatient = new Patient();
    }
  }

}
