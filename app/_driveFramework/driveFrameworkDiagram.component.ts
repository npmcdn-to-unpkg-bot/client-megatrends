///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';
import {DRIVEFRAMEWORK_ROUTES} from '../_driveFramework/driveFramework.routes';
import {JSONReaderService} from '../services/jsonReader.service';

@Component({
  selector: 'about',
  templateUrl: 'app/_driveFramework/driveFrameworkDiagram.html',
  directives:[RouterLink, CORE_DIRECTIVES]
})

export class DriveFrameworkDiagramComponent {

  @Input() driveFrameworkRoutes: RouteDefinition[];

  constructor(private _jsonReaderService: JSONReaderService) {
    this.driveFrameworkRoutes = DRIVEFRAMEWORK_ROUTES;
  }

  ngOnInit() {
    // Json data reading is commented out at the moment cause it's not needed
    // this.getTrends();
  }

  getTrends() {
    this._jsonReaderService.getFile("/app/_driveFramework/driveFramework.data.json").subscribe(
      data => {
        console.error('Success while loading data')
      },
      err => {
        console.error('Error while loading data')
        console.log(err)
      },
      () => console.log('Done loading data')
    );
  }
}
