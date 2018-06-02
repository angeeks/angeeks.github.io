import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GtagModule, GtagID } from '@angeeks/gtag';

import { ProjectModule } from '../project';
import { LayoutModule } from '../layout';
import { AppComponent } from './app.component';
import { AppData } from './data';
import { AppData as Data } from './data/online';

@NgModule({
  imports: [
    GtagModule,
    HttpClientModule,
    BrowserModule,
    ProjectModule,
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: GtagID, useValue: 'UA-119875696-1' },
    { provide: AppData, useClass: Data }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
