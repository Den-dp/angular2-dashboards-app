import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';

const routes = [
  // {path: '', loadChildren: 'src/app/dashboard/dashboard.module'},
  {path: '', component: DashboardComponent},
  // {path: 'settings', loadChildren: 'app/settings/settings.module'},
  {path: 'settings', component: SettingsComponent}
];

export default RouterModule.forRoot(routes);
