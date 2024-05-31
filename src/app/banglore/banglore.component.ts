import { Component } from '@angular/core';

@Component({
  selector: 'bang',
  templateUrl: './banglore.component.html',
  styleUrl: './banglore.component.css'
})
export class BangloreComponent {
  coname: string = "slk"
  year: number = 200;
  IsIndian: boolean = true;
  url: string = "http://google.com"
  ur: string = "https://flipkart.com"
  number: number = 0;
  c: string = "hi"
  b: boolean = true;
  h:string="hello";
  displayData() {
    return "total employee is" + 3000;
  }

  displayMessage() {
    alert("hello angular");
    this.number++;
  }

  applycss(){
    let res={
      hi:true,
      hello:true
    }
    return res
  }

  bg ='red'
  bs = 'backgroundColor:blue;color:yellow;border:3px solid green;width:500px'
  IsBold: boolean = true;
}