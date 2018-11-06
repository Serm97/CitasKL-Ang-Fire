import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// Rutas
import { app_routing } from './app.route';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import{environment} from '../environments/environment';

// Componentes
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DoctorsListComponent } from './components/doctors/doctors-list/doctors-list.component';
import { DoctorComponent } from './components/doctors/doctor/doctor.component';

// Servicios
import { DoctorService } from './services/doctor.service';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { ShedulesComponent } from './components/shedules/shedules.component';
import { SheduleComponent } from './components/shedules/shedule/shedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorsListComponent,
    DoctorComponent,
    PatientsComponent,
    PatientComponent,
    PatientsListComponent,
    ShedulesComponent,
    SheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    app_routing
  ],
  providers: [
    DoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
