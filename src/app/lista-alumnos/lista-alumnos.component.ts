import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  alumnos: Alumno[] = [
    {
      nombre: "Tomas",
      apellido: "Dente", 
      curso: "3A",
      sexo: "M",
      fechaNacimiento: new Date("2015-03-25"),
      fechaInscripcion: new Date
    },
    {
      nombre: "Florencia",
      apellido: "Perez", 
      curso: "5c",
      sexo: "F",
      fechaNacimiento: new Date("2013-08-16"),
      fechaInscripcion: new Date
    },
    {
      nombre: "Micaela",
      apellido: "Vazquez", 
      curso: "2B",
      sexo: "F",
      fechaNacimiento: new Date("2016-06-30"),
      fechaInscripcion: new Date
    },
    {
      nombre: "Juan",
      apellido: "Ramirez", 
      curso: "4A",
      sexo: "M",
      fechaNacimiento: new Date("2014-04-06"),
      fechaInscripcion: new Date
    }
  ];

  calcularEdad(fechaNacimiento: Date): number {
    // const hoy: Date = new Date;
    // const edad: number = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const timeDiff = Math.abs(Date.now() - fechaNacimiento.getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  };

}
