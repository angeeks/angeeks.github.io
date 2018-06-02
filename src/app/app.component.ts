import { Component } from '@angular/core';
import { AppData } from './data';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'About - Angeeks';
  projects = [];
  constructor(data: AppData) {
    data.app.subscribe(d => {
      this.projects = d.projects;
    });
  }
}
