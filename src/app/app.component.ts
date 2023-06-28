import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule, HttpClientModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'Adivinar Genero', url: 'genero', icon: 'paper-plane' },
    { title: 'Determinar Edad', url: 'edad', icon: 'heart' },
    { title: 'Buscar Universidad', url: 'universidades', icon: 'archive' },
    { title: 'Clima', url: 'clima', icon: 'trash' },
    { title: 'Black America', url: 'blackamerica', icon: 'warning' },
    { title: 'Sobre mi', url: 'yo', icon: ''},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
