import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAlumno } from '../../models/alumno.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-agregar-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-alumno.component.html',
  styleUrl: './agregar-alumno.component.css'
})
export class AgregarAlumnoComponent {

  miFormulario: FormGroup;

  alumno?: IAlumno;

  constructor(private _fb: FormBuilder, private _apiService: ApiService) {
    this.miFormulario = this._fb.group({
      id: 0,
      nombre: ['', Validators.required],
      materia_id: ['', Validators.required],
      turno_id: ['', Validators.required],
      comision: ['', Validators.required],
      debe_correlativa: [false, Validators.required]
    })
  }

  enviar(){
    if (this.miFormulario.valid) {
      this.alumno = {
        ID: 0,
        NOMBRE: this.miFormulario.value.nombre,
        MATERIA_ID: this.miFormulario.value.materia_id,
        TURNO_ID: this.miFormulario.value.turno_id,
        COMISION: this.miFormulario.value.comision,
        DEBE_CORRELATIVA: this.miFormulario.value.debe_correlativa
      }

      console.log(this.alumno)

      const alumnoPlano = this.convertirAlumno(this.alumno)

      this._apiService.postAlumno(alumnoPlano).subscribe({
        next: (res) => {
          console.log('Alumno creado correctamente', res)
        }, error: (error) => {
          console.error('Error al crear el alumno', error)
        }
      })
    }else {
      console.error('Formulario inválido', this.miFormulario.errors)
    }
  }

  convertirAlumno = (alumno: IAlumno): any => {
    return {
      id: alumno.ID,
      nombre: alumno.NOMBRE,
      materia_id: alumno.MATERIA_ID,
      turno_id: alumno.TURNO_ID,
      comision: alumno.COMISION,
      debe_correlativa: alumno.DEBE_CORRELATIVA
    }
  }
}
