import { Component } from '@angular/core';
import { Gtag } from '@angeeks/gtag';

import { AppData } from './data';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'About - Angeeks';
  projects = [];
  constructor(data: AppData,
    private gtag: Gtag) {
    gtag.event('screen_view', {
      'app_name': 'angeeks.github.io',
      'screen_name' : 'ngk-root'
    });
    data.app.subscribe(d => {
      this.projects = d.projects;
    });
  }
}
