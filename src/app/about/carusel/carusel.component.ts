import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit , OnChanges{

  constructor() { }
  @Input() ricxvi: number = 0
  selectedIndex = this.ricxvi
  @Input() _albums: any = [];
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ricxvi']) {
      this.selectedIndex = changes['ricxvi'].currentValue;
    }
  }

  onPrevClick(){
    if(this.selectedIndex === 0) {
      this.selectedIndex = this._albums.length - 1;
      } else{
      this.selectedIndex--;
    } 

  }
  onNextClick(){
    if(this.selectedIndex === this._albums.length - 1) {
      this.selectedIndex = 0;
      }else{
      this.selectedIndex ++; 
  }
 
}
}
