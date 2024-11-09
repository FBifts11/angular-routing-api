export const listaAlumnos: Alumnos[]=[
    {id:1, nombre:'Pedro Sanchez', materia_id:'2',turno_id:'1',comision:'C',debe_correlativa:'0'},
    {id:2, nombre:'Carlos Ramirez', materia_id:'2',turno_id:'2',comision:'A',debe_correlativa:'1'},
    {id:3, nombre:'Susana Caspe', materia_id:'1',turno_id:'3',comision:'B',debe_correlativa:'0'},
    {id:4, nombre:'Marta Sanchez', materia_id:'1',turno_id:'2',comision:'A'},
    {id:5, nombre:'Veronica Arias', materia_id:'2',turno_id:'1',comision:'B',debe_correlativa:'1'},
    {id:6, nombre:'Marcelo Dominguez', materia_id:'1',turno_id:'3',comision:'A',debe_correlativa:'0'}    
]

export interface Alumnos {
    id: number | string,
    nombre: string,
    materia_id: number | string,
    turno_id: number | string,
    comision: string,
    debe_correlativa?: number | string
}