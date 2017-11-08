import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  template: `<button (click)="getall()">GET</button>
  <ul>
    <li *ngFor="let i of res">{{i.titre}}</li>
  </ul>
    <fieldset>
    <legend>Composant Pere = </legend>
    <p>La valeur de fils: </p>
    La valeur saisie par le Pere:<input type="text">
    <app-fils></app-fils>
  </fieldset>`


})
export class AppComponent {
  res: any[];
  constructor(private http: Http) {
    // console.log(this.res);
  }
  getall() {
    this.http.get('../assets/movies.json').subscribe(
      res => this.res = res.json());
  }
}
