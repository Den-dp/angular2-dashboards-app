import {Component, Input} from "@angular/core";
@Component({
  selector: 'widget-one',
  styles: [`
:host {
  display: block;
  border: 3px solid red;
  color: red;
}
`],
  template: `
<h2>One's message:</h2>
<h3>{{message}}</h3>
<div *ngIf="selected">One</div>`
})
export class WidgetOne {
  //presentation components use inputs for passing data in
  @Input() message;
}
