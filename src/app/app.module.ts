import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
// import {ServicesModule} from "./services/services.module";
// import {routes} from './routes';
import appRoutes from './app.routes';


@NgModule({
  imports: [BrowserModule, appRoutes , /*DashboardModule, ServicesModule.forRoot()*/],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule{}
