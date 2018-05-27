import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
