import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

interface Solicitud {
  id: string;
  idPaciente: number;
  idSolicitud: number;
  tipoExamen: string;
  datosClinicos: string;
  fecha: string;
  observaciones: string;
  nombre: string;
  estado: string;

}

@Component({
  selector: 'app-administracion',
  imports: [TableModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {
  globalFilter: string = ''; // Variable de filtro

  solicitudes: Solicitud[] = [
    { id: '01020304', idPaciente: 12345678, idSolicitud: 1, tipoExamen: 'Examen General', datosClinicos: 'N/A', fecha: '2024-03-01', observaciones: 'Sin observaciones', nombre: 'Esteban', estado: 'Pendiente' },
    { id: '01123562', idPaciente: 23456789, idSolicitud: 2, tipoExamen: 'Examen de Sangre', datosClinicos: 'N/A', fecha: '2024-02-28', observaciones: 'Alto colesterol', nombre: 'Juan', estado: 'Aprobada' },
    { id: '12523522', idPaciente: 36547890, idSolicitud: 3, tipoExamen: 'Radiografía', datosClinicos: 'Fractura', fecha: '2024-02-27', observaciones: 'En tratamiento', nombre: 'Pedro', estado: 'Rechazada' },
    { id: '21523225', idPaciente: 98745632, idSolicitud: 4, tipoExamen: 'Ultrasonido', datosClinicos: 'Dolor abdominal', fecha: '2024-02-27', observaciones: 'Acompañar con análisis', nombre: 'Francisco', estado: 'Suspendida' },
    { id: '26552152', idPaciente: 42458752, idSolicitud: 5, tipoExamen: 'Electrocardiograma', datosClinicos: 'Arritmias', fecha: '2024-02-27', observaciones: 'Urgente', nombre: 'Alejandro', estado: 'Aceptada' },
    { id: '25142145', idPaciente: 58745896, idSolicitud: 6, tipoExamen: 'Ecografía', datosClinicos: 'Embarazo', fecha: '2024-02-27', observaciones: 'Normal', nombre: 'Valeria', estado: 'Rechazada' },
    { id: '58425451', idPaciente: 54789651, idSolicitud: 7, tipoExamen: 'Análisis de orina', datosClinicos: 'Infección urinaria', fecha: '2024-02-27', observaciones: 'Receta enviada', nombre: 'Esteban', estado: 'Suspendida' },
    { id: '57154224', idPaciente: 12547893, idSolicitud: 8, tipoExamen: 'Tomografía', datosClinicos: 'Cefalea', fecha: '2024-02-27', observaciones: 'Para revisión', nombre: 'Gerardo', estado: 'Rechazada' },
    { id: '54123651', idPaciente: 32457894, idSolicitud: 9, tipoExamen: 'Test de alergias', datosClinicos: 'Reacción alérgica', fecha: '2024-02-26', observaciones: 'Bajo seguimiento', nombre: 'Maria', estado: 'Pendiente' },
    { id: '97415326', idPaciente: 23467895, idSolicitud: 10, tipoExamen: 'Test de Covid', datosClinicos: 'Positivo', fecha: '2024-02-25', observaciones: 'En cuarentena', nombre: 'Carlos', estado: 'Aprobada' }
  ];

  onSearch(): void {
    // Filtrar solo por el idPaciente
    this.solicitudes = this.solicitudes.filter(solicitud =>
      solicitud.idPaciente.toString().includes(this.globalFilter)
    );
  }

  onReset(): void {
    this.globalFilter = ''; // Limpiar el input de búsqueda
    // Volver a cargar los datos originales en la tabla
    this.solicitudes = [
      { id: '01020304', idPaciente: 12345678, idSolicitud: 1, tipoExamen: 'Examen General', datosClinicos: 'N/A', fecha: '2024-03-01', observaciones: 'Sin observaciones', nombre: 'Esteban', estado: 'Pendiente' },
      { id: '01123562', idPaciente: 23456789, idSolicitud: 2, tipoExamen: 'Examen de Sangre', datosClinicos: 'N/A', fecha: '2024-02-28', observaciones: 'Alto colesterol', nombre: 'Juan', estado: 'Aprobada' },
      { id: '12523522', idPaciente: 36547890, idSolicitud: 3, tipoExamen: 'Radiografía', datosClinicos: 'Fractura', fecha: '2024-02-27', observaciones: 'En tratamiento', nombre: 'Pedro', estado: 'Rechazada' },
      { id: '21523225', idPaciente: 98745632, idSolicitud: 4, tipoExamen: 'Ultrasonido', datosClinicos: 'Dolor abdominal', fecha: '2024-02-27', observaciones: 'Acompañar con análisis', nombre: 'Francisco', estado: 'Suspendida' },
      { id: '26552152', idPaciente: 42458752, idSolicitud: 5, tipoExamen: 'Electrocardiograma', datosClinicos: 'Arritmias', fecha: '2024-02-27', observaciones: 'Urgente', nombre: 'Alejandro', estado: 'Aceptada' },
      { id: '25142145', idPaciente: 58745896, idSolicitud: 6, tipoExamen: 'Ecografía', datosClinicos: 'Embarazo', fecha: '2024-02-27', observaciones: 'Normal', nombre: 'Valeria', estado: 'Rechazada' },
      { id: '58425451', idPaciente: 54789651, idSolicitud: 7, tipoExamen: 'Análisis de orina', datosClinicos: 'Infección urinaria', fecha: '2024-02-27', observaciones: 'Receta enviada', nombre: 'Esteban', estado: 'Suspendida' },
      { id: '57154224', idPaciente: 12547893, idSolicitud: 8, tipoExamen: 'Tomografía', datosClinicos: 'Cefalea', fecha: '2024-02-27', observaciones: 'Para revisión', nombre: 'Gerardo', estado: 'Rechazada' },
      { id: '54123651', idPaciente: 32457894, idSolicitud: 9, tipoExamen: 'Test de alergias', datosClinicos: 'Reacción alérgica', fecha: '2024-02-26', observaciones: 'Bajo seguimiento', nombre: 'Maria', estado: 'Pendiente' },
      { id: '97415326', idPaciente: 23467895, idSolicitud: 10, tipoExamen: 'Test de Covid', datosClinicos: 'Positivo', fecha: '2024-02-25', observaciones: 'En cuarentena', nombre: 'Carlos', estado: 'Aprobada' }
    ];
  }
}
