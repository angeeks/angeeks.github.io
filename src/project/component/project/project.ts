import { HostListener, OnChanges, Input, Component } from '@angular/core';
import { Gtag } from '@angeeks/gtag';

import { Project as Model } from '../../model';

@Component({
  selector: 'ngk-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class Project implements OnChanges {
  @Input() data: any = {};
  project: Model;
  constructor(private gtag: Gtag) {}

  @HostListener('click', ['$event']) click({ target: t }) {
    const data = {
      name: this.project.title,
      method: 'ngk-project',
      class: t.className,
      text: t.textContent,
      node: t.nodeName
    };
    this.gtag.event('click', data);
  }

  ngOnChanges(e) {
    if (e.data) {
      this.project = new Model(this.data);
    }
  }
}
