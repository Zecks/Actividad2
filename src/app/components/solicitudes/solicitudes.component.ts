import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Solicitud {
  id: number;
  idPaciente: number;
  estado: string;
  fecha: string;
}

@Component({
  selector: 'app-solicitudes',
  imports: [TableModule, FormsModule, InputTextModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  globalFilter: string = '';

  solicitudes: Solicitud[] = [
    { id: 1, idPaciente: 12345678, estado: 'Pendiente', fecha: '2024-03-01' },
    { id: 2, idPaciente: 23456789, estado: 'Aprobada', fecha: '2024-02-28' },
    { id: 3, idPaciente: 36547890, estado: 'Rechazada', fecha: '2024-02-27' },
    { id: 4, idPaciente: 98745632, estado: 'Suspendida', fecha: '2024-02-27' },
    { id: 5, idPaciente: 42458752, estado: 'Aceptada', fecha: '2024-02-27' },
    { id: 6, idPaciente: 58745896, estado: 'Rechazada', fecha: '2024-02-27' },
    { id: 7, idPaciente: 54789651, estado: 'Suspendida', fecha: '2024-02-27' },
    { id: 8, idPaciente: 12547893, estado: 'Rechazada', fecha: '2024-02-27' }
  ];

  onSearch(): void {
    // Filtrar solo por idPaciente
    this.solicitudes = this.solicitudes.filter(solicitud =>
      solicitud.idPaciente.toString().includes(this.globalFilter)
    );
  }

  onReset(): void {
    this.globalFilter = ''; // Limpiar el input de búsqueda
    // Volver a cargar los datos originales en la tabla
    this.solicitudes = [
      { id: 1, idPaciente: 12345678, estado: 'Pendiente', fecha: '2024-03-01' },
      { id: 2, idPaciente: 23456789, estado: 'Aprobada', fecha: '2024-02-28' },
      { id: 3, idPaciente: 36547890, estado: 'Rechazada', fecha: '2024-02-27' },
      { id: 4, idPaciente: 98745632, estado: 'Suspendida', fecha: '2024-02-27' },
      { id: 5, idPaciente: 42458752, estado: 'Aceptada', fecha: '2024-02-27' },
      { id: 6, idPaciente: 58745896, estado: 'Rechazada', fecha: '2024-02-27' },
      { id: 7, idPaciente: 54789651, estado: 'Suspendida', fecha: '2024-02-27' },
      { id: 8, idPaciente: 12547893, estado: 'Rechazada', fecha: '2024-02-27' }
    ];
  }

}
