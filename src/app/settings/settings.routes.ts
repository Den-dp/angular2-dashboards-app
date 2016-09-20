import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings.component';

const routes = [
  {path: 'settings', component: SettingsComponent}
];

export default RouterModule.forChild(routes);
