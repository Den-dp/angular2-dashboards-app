import {Component, ViewChild, Renderer, Input} from "@angular/core";
import {LogDebugger} from "../services/log-debugger.service";
@Component({
  selector: 'widget-three',
  template: `<input #input type="text" [value]="message">`,
  providers: [
    {
      provide: LogDebugger,
      useFactory: ()=> {
        return new LogDebugger(true);
      }
    }
  ]
})
export class WidgetThree {
  @ViewChild('input') input;

  @Input() message = 'default value';

  constructor(private renderer:Renderer, private logDebugger: LogDebugger){}

  ngOnInit(){
    this.logDebugger.debug('Getting...');
  }

  ngAfterViewInit(){
    console.log(this.input);
    // this.input.nativeElement.focus();
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus')
  }
}
