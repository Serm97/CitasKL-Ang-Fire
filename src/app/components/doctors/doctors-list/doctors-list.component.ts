import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { textBinding } from '@angular/core/src/render3';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  doctorList: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctors()
    .snapshotChanges()
    .subscribe(item => {
      this.doctorList = [];
      item.forEach(element => {
          let id = element.payload.toJSON();
          id["$key"] = element.key;
          this.doctorList.push(id as Doctor);
          console.log(this.doctorList);
        })
    })
  }

  // Editar Doctor
  onEdit(doctor: Doctor){
    this.doctorService.selectedDoctor = Object.assign({}, doctor);
  }

  // Eliminar Doctor
  onDelete($key: string){
    if(confirm('¿Desea eliminar el doctor?')){
      this.doctorService.deleteDoctor($key);
    }
    
  }

}
