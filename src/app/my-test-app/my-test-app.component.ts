import { Component } from '@angular/core';

@Component({
  selector: 'app-my-test-app',
  templateUrl: './my-test-app.component.html',
  styleUrl: './my-test-app.component.css'
})
export class MyTestAppComponent {
  number: any = 1;
  hi: boolean = true;
  hello: boolean = false;
  s: string = "hello"
 
  displayMessage() {
    if (this.s === "hello") {
      this.s = "hi"
    }
    else {
      this.s = "hello"
    }
  }
}
