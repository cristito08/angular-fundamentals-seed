import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text" 
        [value]="name"
        (input)="handleChange($event.target.value)">

      <template [ngIf]="name.length > 5">
        <div>
          Searching for... {{ name }}
        </div>
      </template>
      
      <div *ngIf="name.length > 5">
        Searching for... {{ name }}
      </div>
    </div>
  `
})

export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name = value;
  }
}