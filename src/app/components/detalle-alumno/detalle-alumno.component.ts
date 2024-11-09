import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumnos, listaAlumnos } from '../tabla-general/alumnos.mock';
import { IAlumno } from '../../models/alumno.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detalle-alumno',
  standalone: true,
  imports: [],
  templateUrl: './detalle-alumno.component.html',
  styleUrl: './detalle-alumno.component.css'
})
export class DetalleAlumnoComponent implements OnInit {

  // alumno?: Alumnos;
  alumno?: IAlumno;

  // alumnos = listaAlumnos;

  loading:boolean = true;

  constructor(private _route: ActivatedRoute) { }

  private _apiService = inject(ApiService)

  ngOnInit(): void {
    // setTimeout(() => {
    //   this._route.params.subscribe(params => {
    //     //console.log(params['id'])
    //     this.alumno = this.alumnos.find(alumno => alumno.id == params['id'])
    //     this.loading = false;
    //   })
    // }, 2000);

    this._route.params.subscribe({
      next: (params) => {
        this._apiService.getAlumnoById(Number(params['id'])).subscribe({
          next: (data: IAlumno) => {
            this.alumno = data
            this.loading = false
          },
          error: (error: any) => {
            console.log(error)
            this.loading = false
          }
        })
      },
      error: (error: any) => {
        console.log(error)
        this.loading = false
      }
    })
  }
}
