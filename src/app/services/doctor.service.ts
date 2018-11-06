import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  doctorList: AngularFireList<any>;  //Lista de Doctores
  selectedDoctor: Doctor = new Doctor(); //Almacenar el Doctor Seleccionado

  constructor(private firebase: AngularFireDatabase) {}
    
    // Listar Doctores
    getDoctors(){
      return this.doctorList = this.firebase.list('doctors')
    }

    // Insertar Doctor
    insertDoctor(doctor: Doctor){
      this.doctorList.push({
        document: doctor.document,
        name: doctor.name,
        lastname: doctor.lastname,
        age: doctor.age,
        phone: doctor.phone,
        email: doctor.email,
        address: doctor.address
      });
    }

    // Actualizar Doctor
    updateDoctor(doctor: Doctor){
      this.doctorList.update(doctor.$key, {
        document: doctor.document,
        name: doctor.name,
        lastname: doctor.lastname,
        age: doctor.age,
        phone: doctor.phone,
        email: doctor.email,
        address: doctor.address
      });
    }

    // Eliminar Doctor
    deleteDoctor($key: string){
      this.doctorList.remove($key);
    }
  
}
