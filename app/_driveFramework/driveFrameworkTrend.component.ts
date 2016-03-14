///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="./driveFrameworkTrend.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouterLink, Location} from 'angular2/router';
import {JSONReaderService} from '../services/jsonReader.service';

@Component({
    selector: 'driveFrameworkTrend',
    templateUrl: 'app/_driveFramework/driveFrameworkTrend.html',
    directives:[RouterLink]
})

export class DriveFrameworkTrendComponent {

  @Input() currentPath : String
  @Input() trends: trendObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService, private location: Location){
  }

  ngOnInit() {
    this.getTrends();
    this.currentPath = this.location.path();
    this.currentPath = this.currentPath.split("/").pop();
  }

  getTrends() {
    this._jsonReaderService.getFile("/app/_driveFramework/driveFramework.data.json").subscribe(
      data => this.trends = data,
      err => console.log(err)
    );
  }

}
