import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

interface Solicitud {
  cedula: string;
  nombre: string;
  apellido: string;
  fecha: Date;
}

@Component({
  selector: 'app-registro',
  imports: [FormsModule, TableModule, InputTextModule, CalendarModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router: Router) {}

  solicitudes: Solicitud[] = [
    { cedula: "0105945935", nombre: 'Esteban', apellido: 'Salazar', fecha: new Date() },
    { cedula: "010594593", nombre: 'Juan', apellido: 'Bustamante', fecha: new Date() },
    { cedula: "0105945937", nombre: 'Pedro', apellido: 'Rojas', fecha: new Date() },
    { cedula: "0105945938", nombre: 'Francisco', apellido: 'Colmenero', fecha: new Date() },
    { cedula: "0105945939", nombre: 'Alejandro', apellido: 'Gutierrez', fecha: new Date() },
    { cedula: "0105945940", nombre: 'Valeria', apellido: 'Heredia', fecha: new Date() },
    { cedula: "0105945941", nombre: 'Esteban', apellido: 'Hermida', fecha: new Date() },
    { cedula: "0105945942", nombre: 'Gerardo', apellido: 'Calle', fecha: new Date() }
  ];

  // Objeto que va a almacenar el nuevo paciente
  nuevoPaciente: Solicitud = {
    cedula: '',
    nombre: '',
    apellido: '',
    fecha: new Date()
  };

  // Método para agregar el nuevo paciente a la lista de solicitudes
  onSubmit(): void {
    // Verificar que todos los campos estén llenos
    if (this.nuevoPaciente.cedula && this.nuevoPaciente.nombre && this.nuevoPaciente.apellido && this.nuevoPaciente.fecha) {
      this.solicitudes.push({ ...this.nuevoPaciente });
      // Limpiar los campos después de agregar
      this.nuevoPaciente = { cedula: '', nombre: '', apellido: '', fecha: new Date() };
    }
  }

  // Verificar si el formulario es válido (todos los campos son requeridos)
  formularioValido(): boolean {
    return this.nuevoPaciente.cedula !== '' && this.nuevoPaciente.nombre !== '' && this.nuevoPaciente.apellido !== '' && this.nuevoPaciente.fecha !== null;
  }

  cancelar(): void {
    this.router.navigate(['/']);  // Redirige a la página de inicio
  }

}
