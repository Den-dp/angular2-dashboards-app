import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {SimpleService} from "../services/services.module";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
  selector: 'dashboard',
  template: `
<!--<div>I'm dashboard component</div>-->
<!--<div>{{simpleService.message}}</div>-->
1
<!--  <widget-one [message]="simpleService.message"></widget-one>

  <widget-two>
  <h2 header>Title</h2>
  <div content>Some content</div>
  <h3 footer>Footer</h3>
  </widget-two>
  <button (click)="onClick()">Move Component</button>
  <div #container></div>
  
  <template #template let-description="description">
    <h2>My {{description}} template</h2>
    <button>My {{description}} button</button>
  </template>-->
`
})
export class DashboardComponent {
/*  @ViewChild('container', {read: ViewContainerRef}) container;
  @ViewChild('template') template;

  widgetRef;

  //smart containers use the constructor for Dependency Injection to pass the services in
  constructor(
    private simpleService: SimpleService,
    private resolver:ComponentFactoryResolver
  ) {}

  ngAfterContentInit(){
    console.log(this.container);
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.widgetRef = this.container.createComponent(widgetFactory, 1);
    this.widgetRef.instance.message = `I'm second!`
  }

  onClick(){
    const randomIndex = Math.floor(Math.random() * this.container.length);
    this.container.move(this.widgetRef.hostView, randomIndex);

    this.container.createEmbeddedView(this.template, {
      description: 'sweet'
    });
    // const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    //
    // const widgetRef = this.container.createComponent(widgetFactory, 2);
    // widgetRef.instance.message = `I'm third!`
  }*/
}
