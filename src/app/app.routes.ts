import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';

const routes = [
  {path: '', loadChildren: 'app/dashboard/dashboard.module'},
  // {path: 'settings', component: SettingsComponent}
  {path: 'settings', loadChildren: 'app/settings/settings.module'}
];

export default RouterModule.forRoot(routes);
