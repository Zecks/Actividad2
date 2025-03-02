import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent, NavegacionComponent, PieComponent, InicioComponent,
    SolicitudesComponent, AdministracionComponent, ContactoComponent, RegistroComponent, ConsultasComponent,
    ErrorComponent, TableModule, InputTextModule, FormsModule, ButtonModule, CalendarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividad2';
}
