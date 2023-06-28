import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class GeneroPage implements OnInit {
  nombre = '';
  name = '';
  gender = '';
  portada = '';
  genero = '';
  mostrargenero = false;

  constructor(
    private http: HttpClient
    ){}
    DefenirGenero(){
      this.http.get<any>(`https://api.genderize.io/?name=${this.nombre}`).subscribe(res=>{
        console.log(res);
        this.gender = res.gender;
        this.name = res.name;
        console.log(this.gender)
        if(this.gender == 'male'){
          this.portada = '../../assets/image/masculino.png';
          this.genero = 'Masculino';
          this.mostrargenero = true;
        }else if(this.gender == 'female'){
          this.portada = '../../assets/image/femenino.png';
          this.genero = 'Femenino';
          this.mostrargenero = true;
        }else{
          this.mostrargenero = false
        }
      })

    }

    ngOnInit() {
    }
  }


