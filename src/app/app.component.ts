import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { ExamenesComponent } from './components/examenes/examenes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent, NavegacionComponent, PieComponent, InicioComponent,
    PacientesComponent, SolicitudesComponent, AdministracionComponent, ContactoComponent,
    ExamenesComponent, ErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividad2';
}
