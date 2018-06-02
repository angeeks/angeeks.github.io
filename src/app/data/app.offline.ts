import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { default as projects } from 'src/assets/projects.json';

@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor() {

  }
  get app() {
    return of({ projects });
  }
}
