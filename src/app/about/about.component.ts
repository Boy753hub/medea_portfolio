import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // ricxvi: number = 0

  // carusel_opened: boolean = false
  _albums: any = [];
  selectedImgSrc: string = "";
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getImgs();
  }

  getImgs(): void {
    for (let i = 1; i <= 6; i++) {
      const src = './assets/medea_work_pictures/image' + i + '.jpg';
      // const thumb = './assets/medea_work_pictures/thumbs/image' + i + '.jpg';
      const album = {
        src: src,
        // thumb: thumb
      };

      this._albums.push(album);
    }
  }



  open(index: number): void {
    // open corusel
    // this.carusel_opened = !this.carusel_opened
    // this.ricxvi = index
    this.selectedIndex = index;
    this.selectedImgSrc = this._albums[index].src;
  }

  close(): void {
    // close corusel
    // this.carusel_opened = !this.carusel_opened
    this.selectedImgSrc = "";
  }

  onNextImg() {
    this.selectedIndex++;
    if(this.selectedIndex > this._albums.length - 1){
      this.selectedIndex = 0;
    };
    this.selectedImgSrc = this._albums[this.selectedIndex].src;

  }

  onPrevImg() {
    this.selectedIndex--;
    if(this.selectedIndex < 0){
      this.selectedIndex = this._albums.length - 1;
    }
    this.selectedImgSrc = this._albums[this.selectedIndex].src;
  }

}
