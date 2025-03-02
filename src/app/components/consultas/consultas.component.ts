import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

interface Solicitud {
  cedula: string;
  nombre: string;
  apellido: string;
  fecha: string;
}

@Component({
  selector: 'app-consultas',
  imports: [TableModule, FormsModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {
  globalFilter: string = '';
  
  solicitudes: Solicitud[] = [
    { cedula: "0105945935", nombre: 'Esteban', apellido: 'Salazar', fecha: '2024-03-01' },
    { cedula: "010594593", nombre: 'Juan', apellido: 'Bustamante', fecha: '2024-02-28' },
    { cedula: "0105945937", nombre: 'Pedro', apellido: 'Rojas', fecha: '2024-02-27' },
    { cedula: "0105945938", nombre: 'Francisco', apellido: 'Colmenero', fecha: '2024-02-27' },
    { cedula: "0105945939", nombre: 'Alejandro', apellido: 'Gutierrez', fecha: '2024-02-27' },
    { cedula: "0105945940", nombre: 'Valeria', apellido: 'Heredia', fecha: '2024-02-27' },
    { cedula: "0105945941", nombre: 'Esteban', apellido: 'Hermida', fecha: '2024-02-27' },
    { cedula: "0105945942", nombre: 'Gerardo', apellido: 'Calle', fecha: '2024-02-27' }
  ];

  onSearch(): void {
    // Filtrar las solicitudes por nombre
    this.solicitudes = this.solicitudes.filter(solicitud => 
      solicitud.nombre.toLowerCase().includes(this.globalFilter.toLowerCase())
    );
  }

  onReset(): void {
    this.globalFilter = ''; // Limpiar el input de búsqueda
    // Volver a cargar los datos originales en la tabla
    this.solicitudes = [
      { cedula: "0105945935", nombre: 'Esteban', apellido: 'Salazar', fecha: '2024-03-01' },
      { cedula: "0105945936", nombre: 'Juan', apellido: 'Bustamante', fecha: '2024-02-28' },
      { cedula: "0105945937", nombre: 'Pedro', apellido: 'Rojas', fecha: '2024-02-27' },
      { cedula: "0105945938", nombre: 'Francisco', apellido: 'Colmenero', fecha: '2024-02-27' },
      { cedula: "0105945939", nombre: 'Alejandro', apellido: 'Gutierrez', fecha: '2024-02-27' },
      { cedula: "0105945940", nombre: 'Valeria', apellido: 'Heredia', fecha: '2024-02-27' },
      { cedula: "0105945941", nombre: 'Esteban', apellido: 'Hermida', fecha: '2024-02-27' },
      { cedula: "0105945942", nombre: 'Gerardo', apellido: 'Calle', fecha: '2024-02-27' }
    ];
  }
}
