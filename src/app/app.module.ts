import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
// import {ServicesModule} from "./services/services.module";
// import {routes} from './routes';
import appRoutes from './app.routes';
import {SettingsModule} from './settings/settings.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [BrowserModule, DashboardModule, SettingsModule, appRoutes , /*DashboardModule, ServicesModule.forRoot()*/],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule{}
