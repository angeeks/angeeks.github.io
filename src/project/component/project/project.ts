import { OnChanges, Input, Component } from '@angular/core';

import { Project as Model } from '../../model';

@Component({
  selector: 'ngk-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class Project implements OnChanges {
  @Input() data: any = {};
  project: Model;

  ngOnChanges(e) {
    if (e.data) {
      this.project = new Model(this.data);
    }
  }
}
