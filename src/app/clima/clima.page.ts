import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink,RouterLinkActive]
})
export class ClimaPage implements OnInit {
  weather: any[] = [];
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api.weatherbit.io/v2.0/current?lat=18.5001200&lon=-69.9885700&key=3bdec68a23d94fdfbd2cce52c0425587&include=minutely&lang=es').subscribe((res)=>{
      console.log(res);
      this.weather = res.data;
      console.log(this.weather)
    })
  }

}
