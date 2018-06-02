import { NgModule } from '@angular/core';
import { GtagModule } from '@angeeks/gtag';

import { Project } from './component';

@NgModule({
  imports: [
    GtagModule
  ],
  declarations: [ Project ],
  exports: [ Project ]
})
export class ProjectModule { }
