import { NgModule } from '@angular/core';

import { Hero } from './hero';
import { EqHero } from './eq-hero';

@NgModule({
  declarations: [
    Hero,
    EqHero
  ],
  exports: [
    Hero,
    EqHero
  ]
})
export class LayoutModule {

}
