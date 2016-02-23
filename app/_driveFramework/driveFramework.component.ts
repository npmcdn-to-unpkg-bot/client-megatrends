///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from '../app.routes';

@Component({
  selector: 'about',
  templateUrl: 'app/_driveFramework/driveFramework.html',
  directives:[RouterLink, CORE_DIRECTIVES]
})

export class DriveFrameworkComponent {
  @Input() routes: RouteDefinition[];
  constructor() {
    this.routes = APP_ROUTES;
  }
}
