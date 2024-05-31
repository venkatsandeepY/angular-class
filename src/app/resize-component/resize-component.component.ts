import { Component } from '@angular/core';

@Component({
  selector: 'app-resize-component',
  templateUrl: './resize-component.component.html',
  styleUrl: './resize-component.component.css'
})
export class ResizeComponentComponent {
  size =  "font-size : 10px"
  fontSize = 10;
  //size2: number=50
 sizeIncrease(){
  this.size = "font-size: " + ++this.fontSize +"px"
 }

 sizeDecrease(){
  this.size = "font-size: " + --this.fontSize +"px"
 }

}
