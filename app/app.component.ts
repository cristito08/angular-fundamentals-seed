import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo">
      <input type="text" [value]="name">
      <div>
        {{ name }}
      </div>
    </div>
  `
})

export class AppComponent {
  title: string;
  logo: string = 'img/intersys-small.svg';
  name: string = 'Todd Motto';
  constructor() {
    this.title = 'Ultimate Angular';
  }
}