import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

interface Solicitud {
  id: string;
  nombre: string;
  estado: string;
  fecha: string;
}

@Component({
  selector: 'app-administracion',
  imports: [TableModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {
  globalFilter: string = '';
  
  solicitudes: Solicitud[] = [
    { id: '01020304', nombre: 'Esteban', estado: 'Pendiente', fecha: '2024-03-01' },
    { id: '01123562', nombre: 'Juan', estado: 'Aprobada', fecha: '2024-02-28' },
    { id: '12523522', nombre: 'Pedro', estado: 'Rechazada', fecha: '2024-02-27' },
    { id: '21523225', nombre: 'Francisco', estado: 'Suspendida', fecha: '2024-02-27' },
    { id: '26552152', nombre: 'Alejandro', estado: 'Aceptada', fecha: '2024-02-27' },
    { id: '25142145', nombre: 'Valeria', estado: 'Rechazada', fecha: '2024-02-27' },
    { id: '58425451', nombre: 'Esteban', estado: 'Suspendida', fecha: '2024-02-27' },
    { id: '57154224', nombre: 'Gerardo', estado: 'Rechazada', fecha: '2024-02-27' }
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
      { id: '01020304', nombre: 'Esteban', estado: 'Pendiente', fecha: '2024-03-01' },
    { id: '01123562', nombre: 'Juan', estado: 'Aprobada', fecha: '2024-02-28' },
    { id: '12523522', nombre: 'Pedro', estado: 'Rechazada', fecha: '2024-02-27' },
    { id: '21523225', nombre: 'Francisco', estado: 'Suspendida', fecha: '2024-02-27' },
    { id: '26552152', nombre: 'Alejandro', estado: 'Aceptada', fecha: '2024-02-27' },
    { id: '25142145', nombre: 'Valeria', estado: 'Rechazada', fecha: '2024-02-27' },
    { id: '58425451', nombre: 'Esteban', estado: 'Suspendida', fecha: '2024-02-27' },
    { id: '57154224', nombre: 'Gerardo', estado: 'Rechazada', fecha: '2024-02-27' }
    ];
  }
}
