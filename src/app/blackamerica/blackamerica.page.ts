import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blackamerica',
  templateUrl: './blackamerica.page.html',
  styleUrls: ['./blackamerica.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class BlackamericaPage implements OnInit {
  contenido: any[] = [];
  imagen: string = '';
  imagenCargada: boolean = false;
  constructor(private http: HttpClient ) {
    this.imagen = '{{items.jetpack_featured_media_url}}'
  }

  ngOnInit() {
    this.http.get<any>('https://blackamericaweb.com/wp-json/wp/v2/posts').subscribe((res)=>{
      this.contenido = res;
      console.log(res)
      console.log(this.contenido)
    })
  }
  reemplazarImagen(){
    this.imagen = '../../assets/image/news.jpg';
    this.imagenCargada = true;
  }
}
