import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.page.html',
  styleUrls: ['./yo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class YOPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
