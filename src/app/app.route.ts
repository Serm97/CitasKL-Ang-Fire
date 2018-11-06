import { RouterModule, Routes } from "@angular/router";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { PatientsComponent } from "./components/patients/patients.component";
import { ShedulesComponent } from "./components/shedules/shedules.component";

const app_routes: Routes = [
    { path: 'doctors', component: DoctorsComponent},
    { path: 'patients', component: PatientsComponent},
    { path: 'shedules', component: ShedulesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'doctors'}
];

export const app_routing = RouterModule.forRoot(app_routes);