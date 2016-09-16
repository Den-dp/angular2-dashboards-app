import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {WidgetModule} from "../widgets/widgets.module";
@NgModule({
  imports: [WidgetModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
