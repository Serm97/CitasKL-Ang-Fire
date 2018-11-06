import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  patientList: AngularFireList<any>;  //Lista de Patientes
  selectedPatient: Patient = new Patient(); //Almacenar el Patient Seleccionado

  constructor(private firebase: AngularFireDatabase) {}
    
    // Listar Patientes
    getPatients(){
      return this.patientList = this.firebase.list('patients')
    }

    // Insertar Patient
    insertPatient(patient: Patient){
      console.log(patient);
      this.patientList.push({
        document: patient.document,
        name: patient.name,
        lastname: patient.lastname,
        eps: patient.eps,
        sex: patient.sex,
        age: patient.age,
        phone: patient.phone,
        email: patient.email,
        address: patient.address
      });
    }

    // Actualizar Patient
    updatePatient(patient: Patient){
      this.patientList.update(patient.$key, {
        document: patient.document,
        name: patient.name,
        lastname: patient.lastname,
        eps: patient.eps,
        sex: patient.sex,
        age: patient.age,
        phone: patient.phone,
        email: patient.email,
        address: patient.address
      });
    }

    // Eliminar Patient
    deletePatient($key: string){
      this.patientList.remove($key);
    }
  
}
