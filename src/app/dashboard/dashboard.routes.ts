import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: DashboardComponent}
];

export default RouterModule.forChild(routes);
