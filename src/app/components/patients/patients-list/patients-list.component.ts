import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient';
import { textBinding } from '@angular/core/src/render3';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patientList: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients()
    .snapshotChanges()
    .subscribe(item => {
      this.patientList = [];
      item.forEach(element => {
          let id = element.payload.toJSON();
          id["$key"] = element.key;
          this.patientList.push(id as Patient);
        })
    })
  }

  // Editar Patient
  onEdit(patient: Patient){
    this.patientService.selectedPatient = Object.assign({}, patient);
  }

  // Eliminar Patient
  onDelete($key: string){
    if(confirm('¿Desea eliminar el patient?')){
      this.patientService.deletePatient($key);
    }
    
  }

}
