import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultasComponent } from './components/consultas/consultas.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'administracion', component: AdministracionComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'consulta', component: ConsultasComponent },
    { path: 'solicitudes', component: SolicitudesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: ErrorComponent }
];
