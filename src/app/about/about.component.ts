import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ricxvi: number = 0
    ngOnInit(): void {
        
      }
  carusel_opened:boolean = false
  _albums: any = [];
  
  constructor() {
    for (let i = 1; i <= 6; i++) {
      const src = './assets/medea_work_pictures/image' + i + '.jpg';
      const thumb = './assets/medea_work_pictures/thumbs/image' + i + '.jpg';
      const album = {
         src: src,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open corusel
    this.carusel_opened = !this.carusel_opened
    this.ricxvi = index

  }

  close(): void {
    // close corusel
    this.carusel_opened = !this.carusel_opened
  }
  

}
