import { NgModule } from '@angular/core';

import { Hero } from './hero';

@NgModule({
  declarations: [
    Hero
  ],
  exports: [
    Hero
  ]
})
export class LayoutModule {

}
