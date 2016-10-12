import { Component } from '@angular/core';
// import { Main } from './containers';
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  styles: [`
    a {
    text-decoration: none;
    }
    
    a.active {
      font-weight: bold;
    }
  `],
  // directives: [
  //   ...ROUTER_DIRECTIVES
  // ],
  template: `
    <div class="app">
      <nav>
        <a
          routerLink=""
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
          >Dashboard</a>
        <a
          routerLink="settings"
          routerLinkActive="active"
          >Settings</a>
      </nav>
      <dashboard></dashboard>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
