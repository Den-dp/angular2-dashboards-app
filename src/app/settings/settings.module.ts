import {NgModule} from "@angular/core";
import {WidgetModule} from "../widgets/widgets.module";
import settingsRoutes from './settings.routes';
import {SettingsComponent} from './settings.component';

@NgModule({
  imports: [WidgetModule, settingsRoutes],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]
})
export class SettingsModule {}
