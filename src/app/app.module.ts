import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProjectModule } from '../project';
import { LayoutModule } from '../layout';
import { AppComponent } from './app.component';
import { AppData } from './data';
import { AppData as Data } from './data/online';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ProjectModule,
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: AppData, useClass: Data }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
