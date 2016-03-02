import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './_home/home.component';
import {AboutComponent} from './_about/about.component';
import {ArticlesComponent} from './_articles/articles.component';
import {ContactComponent} from './_contact/contact.component';
import {DriveFrameworkComponent} from './_driveFramework/driveFramework.component';
import {DriveFramework_D_Component} from './_driveFramework/_D/_D.component';
import {DriveFramework_R_Component} from './_driveFramework/_R/_R.component';
import {DriveFramework_I_Component} from './_driveFramework/_I/_I.component';
import {DriveFramework_V_Component} from './_driveFramework/_V/_V.component';
import {DriveFramework_E_Component} from './_driveFramework/_E/_E.component';

export var APP_ROUTES: RouteDefinition[] = [

    { path: '/home',
      name: 'Home',
      component: HomeComponent,
      data:"parent-root",
      useAsDefault: true},

    { path: '/contact',
      name: 'Contact',
      component: ContactComponent,
      data:"parent-root",},

    { path: '/about',
      name: 'About',
      component: AboutComponent,
      data:"parent-root", },

    { path: '/articles',
      name: 'Articles',
      component: ArticlesComponent,
      data:"parent-root", },

    { path: '/driveFramework',
      name: 'Drive Framework',
      component: DriveFrameworkComponent,
      data:"parent-root", },

    { path: '/driveFramework/demographic-and-social-changes',
      name: 'Demographic & Social Changes',
      component: DriveFramework_D_Component,
      data:"parent-driveFramework", },

    { path: '/driveFramework/resources-scarcity',
      name: 'Resources Scarcity',
      component: DriveFramework_R_Component,
      data:"parent-driveFramework", },

    { path: '/driveFramework/inequalities',
      name: 'Inequalities',
      component: DriveFramework_I_Component,
      data:"parent-driveFramework", },

    { path: '/driveFramework/volatility-scarcity-and-complexity',
      name: 'Volatility, Scarcity & Complexity',
      component: DriveFramework_V_Component,
      data:"parent-driveFramework", },

    { path: '/driveFramework/enterprising-dynamics',
      name: 'Enterprising Dynamics',
      component: DriveFramework_E_Component,
      data:"parent-driveFramework", }
];
