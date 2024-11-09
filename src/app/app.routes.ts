import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaGeneralComponent } from './components/tabla-general/tabla-general.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'tabla-general', component:TablaGeneralComponent},
    {path:'agregar-alumno', component:AgregarAlumnoComponent},
    {path:'tabla-general/:id', component:DetalleAlumnoComponent},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
