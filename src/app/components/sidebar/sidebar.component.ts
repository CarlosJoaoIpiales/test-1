import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil de Usuario',  icon:'person', class: '' },
    { path: '/table-list', title: 'Lista',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Tipografia',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Iconos',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Mapas',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/devices/meters', title: 'Medidores', icon: 'tune', class: '' },
    { path: '/devices/gateways', title: 'Gateways', icon: 'router', class: '' },
    { path: '/devices/meters/register-meter', title: 'Registrar Medidor', icon: '', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  toggleSubmenu(menuItem: any) {
    menuItem.show = !menuItem.show;
  }

  isMobileMenu() {
    return $(window).width() <= 991;
  }
}

