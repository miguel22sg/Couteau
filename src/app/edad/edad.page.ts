import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class EdadPage implements OnInit {

  constructor(    private http: HttpClient
    ) { }
  mostraredad = false;
  nombre = '';
  edad = 0;
  desarrollo = '';
  picture = '';
  PredecirEdad(){
    this.http.get<any>(`https://api.agify.io/?name=${this.nombre}`).subscribe(res=>{
        this.edad = res.age;
        if(this.edad <= 5 && this.edad > 0){
          this.desarrollo = 'bebe';
          this.picture = '../../assets/image/bebe1.jpg'
          this.mostraredad = true;
        }else if(this.edad > 5 && this.edad <= 11){
          this.desarrollo = 'Niño/a';
          this.picture = '../../assets/image/nino1.jpg';
          this.mostraredad = true;
        }else if(this.edad > 11 && this.edad <= 18){
          this.desarrollo = "Adolescente";
          this.picture = '../../assets/image/adolescente.jpg';
          this.mostraredad = true;
        }else if(this.edad > 18 && this.edad <= 26){
          this.desarrollo = "Joven";
          this.picture = '../../assets/image/joven.jpg';
          this.mostraredad = true;
        }else if(this.edad > 26 && this.edad <= 59){
          this.desarrollo = "Adulto/a";
          this.picture = '../../assets/image/adulto2.jpg';
          this.mostraredad = true;
        }else if(this.edad > 59 ){
          this.desarrollo = "Anciano/a";
          this.picture = '../../assets/image/anciano.jpg';
          this.mostraredad = true;
        }else{
          this.mostraredad = false;
        }
        console.log(res.age)
        console.log(this.desarrollo)
    })
  }
  ngOnInit() {
  }

}
