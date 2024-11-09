import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { listaAlumnos } from './alumnos.mock';
import { IAlumno } from '../../models/alumno.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tabla-general',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-general.component.html',
  styleUrl: './tabla-general.component.css'
})
export class TablaGeneralComponent implements OnInit {
  // alumnos = listaAlumnos;

  listadoAlumnos: IAlumno[]= [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getAlumnos().subscribe((datos: IAlumno[]) => {
      this.listadoAlumnos = datos;
    })
  }

  eliminarAlumno(id: number):void {
    this._apiService.deleteAlumno(id).subscribe(() => {
      this._apiService.getAlumnos().subscribe((datos: IAlumno[]) => {
        this.listadoAlumnos = datos
      })
    });
  }

}
