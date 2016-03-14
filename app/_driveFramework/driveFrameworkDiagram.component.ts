///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="./driveFrameworkTrend.d.ts"/>

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink} from 'angular2/router';
import {JSONReaderService} from '../services/jsonReader.service';

@Component({
  selector: 'driveFrameworkDiagram',
  templateUrl: 'app/_driveFramework/driveFrameworkDiagram.html',
  directives:[RouterLink, CORE_DIRECTIVES]
})

export class DriveFrameworkDiagramComponent {

  @Input() trends: trendObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService) {
  }

  ngOnInit() {
    this.getTrends();
  }

  getTrends() {
    this._jsonReaderService.getFile("/app/_driveFramework/driveFramework.data.json").subscribe(
      data => this.trends = data,
      err => console.log(err)
    );
  }
}
