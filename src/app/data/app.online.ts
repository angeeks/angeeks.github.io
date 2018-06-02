import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

const reposApi = 'https://api.github.com/orgs/angeeks/repos';
@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor(private http: HttpClient) {

  }
  get app() {
    return this.http.get(reposApi, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    }).pipe(map((r: any[]) => {
      const projects = r.filter(p => {
        return p.topics.includes('npm');
      });
      return { projects };
    }));
  }
}
