import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuneComponent } from '../pune/pune.component';



@NgModule({
  declarations: [
    PuneComponent
  ],
  imports: [
    CommonModule    
  ],
  exports:[
    PuneComponent
  ]
})
export class MyModuleModule { }
