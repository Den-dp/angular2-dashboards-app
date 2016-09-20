import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {WidgetModule} from "../widgets/widgets.module";
import dashboardRoutes from './dashboard.routes';

@NgModule({
  imports: [WidgetModule, dashboardRoutes],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
