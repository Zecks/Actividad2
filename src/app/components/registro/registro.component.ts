import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';


interface Solicitud {
  cedula: string;
  nombre: string;
  nombre2: string;
  apellidoP: string;
  apellidoM: string;
  fecha: Date;
  direccion: string;
  email: string;
  telefono: string;
  celular: string;
  tipoIdentificador: string;
  idPaciente: string;
}

@Component({
  selector: 'app-registro',
  imports: [FormsModule, TableModule, InputTextModule, CalendarModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router: Router) {}

  // Lista de solicitudes con la estructura definida en la interfaz
  solicitudes: Solicitud[] = [
    { idPaciente: "1", cedula: "0105945935", nombre: 'Esteban', nombre2: "Rodrigo", apellidoP: 'Salazar', apellidoM: "Cortino", fecha: new Date(), direccion: "Las esquinas", email: "emaisincho@gmail.com", telefono: "2896029", celular: "0959254866", tipoIdentificador: "1" },
    { idPaciente: "2", cedula: "0105945936", nombre: 'Carlos', nombre2: "Mateo", apellidoP: 'Matiz', apellidoM: "Vinicius", fecha: new Date(), direccion: "Las esquinas 2", email: "rmaisfda@gmail.com", telefono: "2896030", celular: "0959254867", tipoIdentificador: "1" },
    { idPaciente: "3", cedula: "0105945937", nombre: 'Dario', nombre2: "Rodriguez", apellidoP: 'Guale', apellidoM: "Estraus", fecha: new Date(), direccion: "Las esquinas 3", email: "asdssd@gmail.com", telefono: "2896031", celular: "0959254868", tipoIdentificador: "1" },
    { idPaciente: "4", cedula: "0105945938", nombre: 'Juan', nombre2: "Sebastian", apellidoP: 'Strap', apellidoM: "Chan", fecha: new Date(), direccion: "Las esquinas 4", email: "aasdsd@gmail.com", telefono: "2896032", celular: "0959254869", tipoIdentificador: "1" },
    { idPaciente: "5", cedula: "0105945939", nombre: 'Pepe', nombre2: "farez", apellidoP: 'Fabiole', apellidoM: "Chunli", fecha: new Date(), direccion: "Las esquinas 5", email: "aaaadsfas@gmail.com", telefono: "2896033", celular: "0959254870", tipoIdentificador: "1" },
    { idPaciente: "6", cedula: "0105945940", nombre: 'Cordelio', nombre2: "Monlio", apellidoP: 'vincini', apellidoM: "Cage", fecha: new Date(), direccion: "Las esquinas 6", email: "eaasdfo@gmail.com", telefono: "2896034", celular: "0959254871", tipoIdentificador: "1" },
    { idPaciente: "7", cedula: "0105945941", nombre: 'Alejandro', nombre2: "Starus", apellidoP: 'Admodeus', apellidoM: "kang", fecha: new Date(), direccion: "Las esquinas 7", email: "asdvgva@gmail.com", telefono: "2896035", celular: "0959254872", tipoIdentificador: "1" },
    { idPaciente: "8", cedula: "0105945942", nombre: 'Kratos', nombre2: "Concordio", apellidoP: 'Armando', apellidoM: "Connor", fecha: new Date(), direccion: "Las esquinas 8", email: "sagadvs@gmail.com", telefono: "2896036", celular: "0959254873", tipoIdentificador: "1" }
  ];

  // Objeto que va a almacenar el nuevo paciente con todos los campos definidos en la interfaz
  nuevoPaciente: Solicitud = {
    idPaciente: '',
    cedula: '',
    nombre: '',
    nombre2: '',
    apellidoP: '',
    apellidoM: '',
    fecha: new Date(),
    direccion: '',
    email: '',
    telefono: '',
    celular: '',
    tipoIdentificador: '',
  };

  // Método para agregar el nuevo paciente a la lista de solicitudes
  onSubmit(): void {
    // Verificar que todos los campos estén llenos
    if (this.nuevoPaciente.cedula && this.nuevoPaciente.nombre && this.nuevoPaciente.apellidoP && this.nuevoPaciente.apellidoM && this.nuevoPaciente.fecha) {
      this.solicitudes.push({ ...this.nuevoPaciente });
      // Limpiar los campos después de agregar
      this.nuevoPaciente = {
        idPaciente: '',
        cedula: '',
        nombre: '',
        nombre2: '',
        apellidoP: '',
        apellidoM: '',
        fecha: new Date(),
        direccion: '',
        email: '',
        telefono: '',
        celular: '',
        tipoIdentificador: '',
      };
    }
  }

  // Verificar si el formulario es válido (todos los campos son requeridos)
  formularioValido(): boolean {
    return this.nuevoPaciente.cedula !== '' && this.nuevoPaciente.nombre !== '' && this.nuevoPaciente.apellidoP !== '' && this.nuevoPaciente.apellidoM !== '' && this.nuevoPaciente.fecha !== null;
  }

  cancelar(): void {
    this.router.navigate(['/']);  // Redirige a la página de inicio
  }

}
