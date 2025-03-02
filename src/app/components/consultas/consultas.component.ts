import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

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
  selector: 'app-consultas',
  imports: [TableModule, FormsModule, CalendarModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {
  globalFilter: string = '';

  // Lista de solicitudes con la nueva estructura
  solicitudes: Solicitud[] = [
    {
      cedula: "0105945935", nombre: 'Esteban', nombre2: 'Antonio', apellidoP: 'Salazar', apellidoM: 'Lopez',
      fecha: new Date('2024-03-01'), direccion: 'Calle Ficticia 123', email: 'esteban@example.com', telefono: '123456789',
      celular: '987654321', tipoIdentificador: 'CC', idPaciente: '1'
    },
    {
      cedula: "0105945936", nombre: 'Juan', nombre2: 'Carlos', apellidoP: 'Bustamante', apellidoM: 'Martínez',
      fecha: new Date('2024-02-28'), direccion: 'Avenida Siempre Viva 456', email: 'juan@example.com', telefono: '234567890',
      celular: '876543210', tipoIdentificador: 'CC', idPaciente: '2'
    },
    {
      cedula: "0105945937", nombre: 'Pedro', nombre2: 'José', apellidoP: 'Rojas', apellidoM: 'Gonzalez',
      fecha: new Date('2024-02-27'), direccion: 'Calle Nueva 789', email: 'pedro@example.com', telefono: '345678901',
      celular: '765432109', tipoIdentificador: 'CC', idPaciente: '3'
    },
    {
      cedula: "0105945938", nombre: 'Francisco', nombre2: 'Luis', apellidoP: 'Colmenero', apellidoM: 'Pérez',
      fecha: new Date('2024-02-27'), direccion: 'Calle del Sol 321', email: 'francisco@example.com', telefono: '456789012',
      celular: '654321098', tipoIdentificador: 'CC', idPaciente: '4'
    },
    {
      cedula: "0105945939", nombre: 'Alejandro', nombre2: 'Miguel', apellidoP: 'Gutierrez', apellidoM: 'Ruiz',
      fecha: new Date('2024-02-27'), direccion: 'Calle del Mar 654', email: 'alejandro@example.com', telefono: '567890123',
      celular: '543210987', tipoIdentificador: 'CC', idPaciente: '5'
    },
    {
      cedula: "0105945940", nombre: 'Valeria', nombre2: 'Fernanda', apellidoP: 'Heredia', apellidoM: 'Jiménez',
      fecha: new Date('2024-02-27'), direccion: 'Calle Primavera 987', email: 'valeria@example.com', telefono: '678901234',
      celular: '432109876', tipoIdentificador: 'CC', idPaciente: '6'
    },
    {
      cedula: "0105945941", nombre: 'Esteban', nombre2: 'José', apellidoP: 'Hermida', apellidoM: 'Morales',
      fecha: new Date('2024-02-27'), direccion: 'Calle del Bosque 123', email: 'esteban2@example.com', telefono: '789012345',
      celular: '321098765', tipoIdentificador: 'CC', idPaciente: '7'
    },
    {
      cedula: "0105945942", nombre: 'Gerardo', nombre2: 'Ángel', apellidoP: 'Calle', apellidoM: 'Sánchez',
      fecha: new Date('2024-02-27'), direccion: 'Avenida Central 654', email: 'gerardo@example.com', telefono: '890123456',
      celular: '210987654', tipoIdentificador: 'CC', idPaciente: '8'
    },
    {
      cedula: "0105945943", nombre: 'Laura', nombre2: 'Beatriz', apellidoP: 'Méndez', apellidoM: 'Vega',
      fecha: new Date('2024-02-26'), direccion: 'Calle de los Álamos 321', email: 'laura@example.com', telefono: '901234567',
      celular: '109876543', tipoIdentificador: 'CC', idPaciente: '9'
    },
    {
      cedula: "0105945944", nombre: 'Ricardo', nombre2: 'David', apellidoP: 'Lozano', apellidoM: 'Moreno',
      fecha: new Date('2024-02-25'), direccion: 'Calle Las Flores 543', email: 'ricardo@example.com', telefono: '123098765',
      celular: '987654321', tipoIdentificador: 'CC', idPaciente: '10'
    }
  ];


  onSearch(): void {
    // Filtrar las solicitudes por nombre
    this.solicitudes = this.solicitudes.filter(solicitud =>
      solicitud.nombre.toLowerCase().includes(this.globalFilter.toLowerCase()) ||
      solicitud.nombre2.toLowerCase().includes(this.globalFilter.toLowerCase()) ||
      solicitud.apellidoP.toLowerCase().includes(this.globalFilter.toLowerCase()) ||
      solicitud.apellidoM.toLowerCase().includes(this.globalFilter.toLowerCase())
    );
  }

  onReset(): void {
    this.globalFilter = ''; // Limpiar el input de búsqueda
    // Volver a cargar los datos originales en la tabla
    this.solicitudes = [
      {
        cedula: "0105945935", nombre: 'Esteban', nombre2: 'Antonio', apellidoP: 'Salazar', apellidoM: 'Lopez',
        fecha: new Date('2024-03-01'), direccion: 'Calle Ficticia 123', email: 'esteban@example.com', telefono: '123456789',
        celular: '987654321', tipoIdentificador: 'CC', idPaciente: '1'
      },
      {
        cedula: "0105945936", nombre: 'Juan', nombre2: 'Carlos', apellidoP: 'Bustamante', apellidoM: 'Martínez',
        fecha: new Date('2024-02-28'), direccion: 'Avenida Siempre Viva 456', email: 'juan@example.com', telefono: '234567890',
        celular: '876543210', tipoIdentificador: 'CC', idPaciente: '2'
      },
      {
        cedula: "0105945937", nombre: 'Pedro', nombre2: 'José', apellidoP: 'Rojas', apellidoM: 'Gonzalez',
        fecha: new Date('2024-02-27'), direccion: 'Calle Nueva 789', email: 'pedro@example.com', telefono: '345678901',
        celular: '765432109', tipoIdentificador: 'CC', idPaciente: '3'
      },
      {
        cedula: "0105945938", nombre: 'Francisco', nombre2: 'Luis', apellidoP: 'Colmenero', apellidoM: 'Pérez',
        fecha: new Date('2024-02-27'), direccion: 'Calle del Sol 321', email: 'francisco@example.com', telefono: '456789012',
        celular: '654321098', tipoIdentificador: 'CC', idPaciente: '4'
      },
      {
        cedula: "0105945939", nombre: 'Alejandro', nombre2: 'Miguel', apellidoP: 'Gutierrez', apellidoM: 'Ruiz',
        fecha: new Date('2024-02-27'), direccion: 'Calle del Mar 654', email: 'alejandro@example.com', telefono: '567890123',
        celular: '543210987', tipoIdentificador: 'CC', idPaciente: '5'
      },
      {
        cedula: "0105945940", nombre: 'Valeria', nombre2: 'Fernanda', apellidoP: 'Heredia', apellidoM: 'Jiménez',
        fecha: new Date('2024-02-27'), direccion: 'Calle Primavera 987', email: 'valeria@example.com', telefono: '678901234',
        celular: '432109876', tipoIdentificador: 'CC', idPaciente: '6'
      },
      {
        cedula: "0105945941", nombre: 'Esteban', nombre2: 'José', apellidoP: 'Hermida', apellidoM: 'Morales',
        fecha: new Date('2024-02-27'), direccion: 'Calle del Bosque 123', email: 'esteban2@example.com', telefono: '789012345',
        celular: '321098765', tipoIdentificador: 'CC', idPaciente: '7'
      },
      {
        cedula: "0105945942", nombre: 'Gerardo', nombre2: 'Ángel', apellidoP: 'Calle', apellidoM: 'Sánchez',
        fecha: new Date('2024-02-27'), direccion: 'Avenida Central 654', email: 'gerardo@example.com', telefono: '890123456',
        celular: '210987654', tipoIdentificador: 'CC', idPaciente: '8'
      },
      {
        cedula: "0105945943", nombre: 'Laura', nombre2: 'Beatriz', apellidoP: 'Méndez', apellidoM: 'Vega',
        fecha: new Date('2024-02-26'), direccion: 'Calle de los Álamos 321', email: 'laura@example.com', telefono: '901234567',
        celular: '109876543', tipoIdentificador: 'CC', idPaciente: '9'
      },
      {
        cedula: "0105945944", nombre: 'Ricardo', nombre2: 'David', apellidoP: 'Lozano', apellidoM: 'Moreno',
        fecha: new Date('2024-02-25'), direccion: 'Calle Las Flores 543', email: 'ricardo@example.com', telefono: '123098765',
        celular: '987654321', tipoIdentificador: 'CC', idPaciente: '10'
      }
    ];

  }
}
