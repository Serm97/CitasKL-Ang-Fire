import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Schedule } from 'src/app/models/shedule'; //Importar Clase Shedule
import { SheduleService } from 'src/app/services/shedule.service'; //Importar Servicio

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {

  constructor(private sheduleService: SheduleService) { }

  ngOnInit() {
    this.sheduleService.getShedules();
    this.resetForm();
  }

  // Enviar datos de Formulario
  onSubmit(sheduleForm: NgForm){
    if(sheduleForm.value.$key == null){
      this.sheduleService.insertShedule(sheduleForm.value);
      alert('Horario ha sido creado.');
    }else{
      this.sheduleService.updateShedule(sheduleForm.value);
      alert('Horario ha sido actualizado.');
    }   
    
    this.resetForm(sheduleForm);
    
  }


  // Limpiar Formulario
  resetForm(sheduleForm?: NgForm){
    if (sheduleForm != null) {
      sheduleForm.reset();
      this.sheduleService.selectedShedule = new Schedule();
    }
  }

}
