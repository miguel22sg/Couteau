import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class UniversidadesPage implements OnInit {
  universidades: any[] = [];
  elementos: any[] = [];
  constructor(private http: HttpClient) { }
  pais='';
  items = [];
  onInputChange(event: any) {
    const inputValue = event.target.value;
    const replacedValue = inputValue.replace(/ /g, '+');
    event.target.value = replacedValue;
  }
  Buscaruniversidades(cantidad: number){
    this.http.get<any>(`http://universities.hipolabs.com/search?country=${this.pais}`).subscribe(res=>{
      this.universidades = res;
      console.log(this.universidades)
    })
  }

  ngOnInit() {
  }
}
