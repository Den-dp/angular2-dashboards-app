import { Component } from '@angular/core';
// import { Main } from './containers';
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  // directives: [
  //   ...ROUTER_DIRECTIVES
  // ],
  template: `
    <div class="app">
      <nav>
        <a routerLink="">Dashboard</a>
        <a routerLink="settings">Settings</a>
      </nav>
      <dashboard></dashboard>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
