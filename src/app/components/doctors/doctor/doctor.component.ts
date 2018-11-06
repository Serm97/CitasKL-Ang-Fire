import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor'; //Importar Clase Doctor
import { DoctorService } from 'src/app/services/doctor.service'; //Importar Servicio

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctors();
    this.resetForm();
  }

  // Enviar datos de Formulario
  onSubmit(doctorForm: NgForm){
    if(doctorForm.value.$key == null){
      this.doctorService.insertDoctor(doctorForm.value);
      alert('Doctor ' + this.doctorService.selectedDoctor.name + ' ha sido creado.');
    }else{
      this.doctorService.updateDoctor(doctorForm.value);
      alert('Doctor ' + this.doctorService.selectedDoctor.name + ' ha sido actualizado.');
    }   
    
    this.resetForm(doctorForm);
    
  }


  // Limpiar Formulario
  resetForm(doctorForm?: NgForm){
    if (doctorForm != null) {
      doctorForm.reset();
      this.doctorService.selectedDoctor = new Doctor();
    }
  }

}
