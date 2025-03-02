import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  imports: [RouterLink, RouterLinkActive, Menubar, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        route: '/inicio'
      },
      {
        label: 'Pacientes',
        icon: 'pi pi-users',
        items: [  // Submenú
          {
            label: 'Registro',
            route: '/pacientes/registro',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Consulta',
            route: '/pacientes/consulta',
            icon: 'pi pi-search'
          }
        ]
      },
      {
        label: 'Solicitudes',
        icon: 'pi pi-file',
        route: '/solicitudes'
      },
      {
        label: 'Administración',
        icon: 'pi pi-cog',
        route: '/administracion'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-phone',
        route: '/contacto'
      }
    ];
  }
}
