import {RouteDefinition} from 'angular2/router';
import {DriveFrameworkDiagramComponent}
  from '../_driveFramework/driveFrameworkDiagram.component';
import {DriveFrameworkTrendComponent}
  from '../_driveFramework/driveFrameworkTrend.component';
import {DriveFramework_D_Component} from '../_driveFramework/_D/_D.component';
import {DriveFramework_R_Component} from '../_driveFramework/_R/_R.component';
import {DriveFramework_I_Component} from '../_driveFramework/_I/_I.component';
import {DriveFramework_V_Component} from '../_driveFramework/_V/_V.component';
import {DriveFramework_E_Component} from '../_driveFramework/_E/_E.component';

export var DRIVEFRAMEWORK_ROUTES: RouteDefinition[] = [

  { path: '/',
    name: 'Drive Framework Diagram',
    component: DriveFrameworkDiagramComponent,
    useAsDefault: true},

  /*
  { path: '/:id',
    name: 'Drive Framework Trend',
    component: DriveFrameworkTrendComponent},
  */

  { path: '/demographic-and-social-changes',
    name: 'Demographic & Social Changes',
    component: DriveFramework_D_Component,
    data:"trend", },

  { path: '/resources-scarcity',
    name: 'Resources Scarcity',
    component: DriveFramework_R_Component,
    data:"trend", },

  { path: '/inequalities',
    name: 'Inequalities',
    component: DriveFramework_I_Component,
    data:"trend", },

  { path: '/volatility-scarcity-and-complexity',
    name: 'Volatility, Scarcity & Complexity',
    component: DriveFramework_V_Component,
    data:"trend", },

  { path: '/enterprising-dynamics',
    name: 'Enterprising Dynamics',
    component: DriveFramework_E_Component,
    data:"trend", }

];
