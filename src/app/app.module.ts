import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelhiComponent } from './delhi/delhi.component';
import { BangloreComponent } from './banglore/banglore.component';
import { MyModuleModule } from './my-module/my-module.module';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { MyTestAppComponent } from './my-test-app/my-test-app.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { ResizeComponentComponent } from './resize-component/resize-component.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    DelhiComponent,
    BangloreComponent,
    HyderabadComponent,
    MyTestAppComponent,
    ImagecomponentComponent,
    ResizeComponentComponent,
    StructuralDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
