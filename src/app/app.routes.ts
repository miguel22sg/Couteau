import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'genero',
    loadComponent: () => import('./genero/genero.page').then( m => m.GeneroPage)
  },
  {
    path: 'edad',
    loadComponent: () => import('./edad/edad.page').then( m => m.EdadPage)
  },
  {
    path: 'universidades',
    loadComponent: () => import('./universidades/universidades.page').then( m => m.UniversidadesPage)
  },
  {
    path: 'clima',
    loadComponent: () => import('./clima/clima.page').then( m => m.ClimaPage)
  },
  {
    path: 'blackamerica',
    loadComponent: () => import('./blackamerica/blackamerica.page').then( m => m.BlackamericaPage)
  },
  {
    path: 'yo',
    loadComponent: () => import('./yo/yo.page').then( m => m.YOPage)
  },
];
