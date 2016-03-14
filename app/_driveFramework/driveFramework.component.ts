///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {DRIVEFRAMEWORK_ROUTES} from '../_driveFramework/driveFramework.routes';

@Component({
  selector: 'about',
  templateUrl: 'app/_driveFramework/driveFramework.html',
  directives:[RouterOutlet]
})

@RouteConfig(DRIVEFRAMEWORK_ROUTES)

export class DriveFrameworkComponent {

}
