import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  icons = [
    { name: 'home', label: 'Inicio' },
    { name: 'favorite', label: 'Favoritos' },
    { name: 'settings', label: 'Ajustes' },
    { name: 'menu', label: 'Menu' },
    { name: 'add', label: 'Aniadir' },
    // Se pueden agregar mas de ser necesario
  ];

  constructor() { }

  ngOnInit() {
  }
}
