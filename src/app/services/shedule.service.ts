import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Schedule } from '../models/shedule';

@Injectable({
  providedIn: 'root'
})
export class SheduleService {
  
  sheduleList: AngularFireList<any>;  //Lista de Shedulees
  selectedShedule: Schedule = new Schedule(); //Almacenar el Shedule Seleccionado

  constructor(private firebase: AngularFireDatabase) {}
    
    // Listar Shedules
    getShedules(){
      return this.sheduleList = this.firebase.list('shedules')
    }

    // Insertar Shedule
    insertShedule(shedule: Schedule){
      this.sheduleList.push({
        start: shedule.start,
        end: shedule.end,
        dateschedule: shedule.dateschedule,
        available: shedule.available,
        doctor: shedule.doctor
      });
    }

    // Actualizar Shedule
    updateShedule(shedule: Schedule){
      this.sheduleList.update(shedule.$key, {
        start: shedule.start,
        end: shedule.end,
        dateschedule: shedule.dateschedule,
        available: shedule.available,
        doctor: shedule.doctor
      });
    }

    // Eliminar Shedule
    deleteShedule($key: string){
      this.sheduleList.remove($key);
    }
  
}
