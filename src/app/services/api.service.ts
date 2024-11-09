import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://127.0.0.1:3000/alumnos'

  constructor(private _http:HttpClient) { }

  public getAlumnos():Observable<IAlumno[]> {
    return this._http.get<IAlumno[]>(this.url);
  }

  public getAlumnoById(id: number):Observable<IAlumno> {
    return this._http.get<IAlumno>(`${this.url}/${id}`);
  }

  public postAlumno(alumno: IAlumno):Observable<IAlumno> {
    return this._http.post<IAlumno>(`${this.url}`, alumno);
  }

  public putAlumno(id:number, alumno: IAlumno):Observable<IAlumno> {
    return this._http.put<IAlumno>(`${this.url}/${id}`, alumno)
  }

  public deleteAlumno(id:number):Observable<IAlumno> {
    return this._http.delete<IAlumno>(`${this.url}/${id}`)
  }

}
