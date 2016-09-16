import {AppComponent} from "./";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {DashboardModule} from "./dashboard/dashboard.module";
import {ServicesModule} from "./services/services.module";

@NgModule({
  imports: [BrowserModule, DashboardModule, ServicesModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule{}
