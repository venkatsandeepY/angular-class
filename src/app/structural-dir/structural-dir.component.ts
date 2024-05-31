import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  exists = true;
  pageTitle: string = "Hello"; 

  toggleExists() {
    this.exists = !this.exists;
  }

  Countries: string[]=["India"," USA", "Russia"]

    
}
