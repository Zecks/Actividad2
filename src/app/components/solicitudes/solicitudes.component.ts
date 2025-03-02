import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

interface Solicitud {
  id: number;
  nombre: string;
  estado: string;
  fecha: string;
}

@Component({
  selector: 'app-solicitudes',
  imports: [TableModule, FormsModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  globalFilter: string = '';
  
  solicitudes: Solicitud[] = [
    { id: 1, nombre: 'Esteban', estado: 'Pendiente', fecha: '2024-03-01' },
    { id: 2, nombre: 'Juan', estado: 'Aprobada', fecha: '2024-02-28' },
    { id: 3, nombre: 'Pedro', estado: 'Rechazada', fecha: '2024-02-27' },
    { id: 4, nombre: 'Francisco', estado: 'Suspendida', fecha: '2024-02-27' },
    { id: 5, nombre: 'Alejandro', estado: 'Aceptada', fecha: '2024-02-27' },
    { id: 6, nombre: 'Valeria', estado: 'Rechazada', fecha: '2024-02-27' },
    { id: 7, nombre: 'Esteban', estado: 'Suspendida', fecha: '2024-02-27' },
    { id: 8, nombre: 'Gerardo', estado: 'Rechazada', fecha: '2024-02-27' }
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
      { id: 1, nombre: 'Esteban', estado: 'Pendiente', fecha: '2024-03-01' },
      { id: 2, nombre: 'Juan', estado: 'Aprobada', fecha: '2024-02-28' },
      { id: 3, nombre: 'Pedro', estado: 'Rechazada', fecha: '2024-02-27' },
      { id: 4, nombre: 'Francisco', estado: 'Suspendida', fecha: '2024-02-27' },
      { id: 5, nombre: 'Alejandro', estado: 'Aceptada', fecha: '2024-02-27' },
      { id: 6, nombre: 'Valeria', estado: 'Rechazada', fecha: '2024-02-27' },
      { id: 7, nombre: 'Esteban', estado: 'Suspendida', fecha: '2024-02-27' },
      { id: 8, nombre: 'Gerardo', estado: 'Rechazada', fecha: '2024-02-27' }
    ];
  }

}
