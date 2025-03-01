import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent, NavegacionComponent, PieComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividad2';
}
