import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './_home/home.component';
import {AboutComponent} from './_about/about.component';
import {ArticlesComponent} from './_articles/articles.component';
import {ContactComponent} from './_contact/contact.component';
import {DriveFrameworkComponent} from './_driveFramework/driveFramework.component';

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

    { path: '/articles/...',
      name: 'Articles',
      component: ArticlesComponent,
      data:"parent-root", },

    { path: '/driveFramework/...',
      name: 'Drive Framework',
      component: DriveFrameworkComponent,
      data:"parent-root", }
];
