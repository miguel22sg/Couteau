import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive, ]
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  dataArray: { title: string, picture: string, page: string }[] = [
    {
      title: "Adivinar Genero",
      picture: "../../assets/image/genero.jpg",
      page: '../genero'
    },
    {
      title: "Determinar Edad",
      picture: "../../assets/image/edad3.png",
      page: '../edad'
    },
    {
      title: "Buscar Universidad",
      picture: "../../assets/image/universidad2.png",
      page: '../universidades'
    },
    {
      title: "Clima",
      picture: "../../assets/image/clima1.jpeg",
      page: '../clima'
    },
    {
      title: "BlackAmerica",
      picture: "../../assets/image/blackamerica2.jpg",
      page: '../blackamerica'
    },
    {
      title: "YO",
      picture: "../../assets/image/me.jpg",
      page: '../yo'
    }
  ];
  changePage(){

  }

  ngOnInit() {
  }

}
