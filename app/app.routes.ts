import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './_home/home.component';
import {AboutComponent} from './_about/about.component';
import {ArticlesComponent} from './_articles/articles.component';
import {ContactComponent} from './_contact/contact.component';

export var APP_ROUTES: RouteDefinition[] = [

    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '/articles', name: 'Articles', component: ArticlesComponent }

];
