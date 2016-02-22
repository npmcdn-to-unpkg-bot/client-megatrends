///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';

import {RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from '../app.routes';

import {NavbarComponent} from '../navbar/navbar.component';
import {PageComponent} from '../page/page.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
    selector: 'home',
    templateUrl: 'app/_home/home.html',
    directives:[NavbarComponent, PageComponent, FooterComponent]
})

export class HomeComponent {
  public appRoutes: RouteDefinition[];
  constructor() {
    this.appRoutes = APP_ROUTES;
  }
}
