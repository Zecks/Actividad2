import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'administracion', component: AdministracionComponent },
    { path: 'pacientes', component: PacientesComponent },
    //{ path: 'pacientes/registro', component: RegistroComponent },
   // { path: 'pacientes/consulta', component: ConsultaComponent },
    { path: 'solicitudes', component: SolicitudesComponent },
    { path: 'examenes', component: ExamenesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: ErrorComponent }
];
