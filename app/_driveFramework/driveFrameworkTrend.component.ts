///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

///<reference path="./driveFrameworkTrend.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouterLink, Location} from 'angular2/router';
import {JSONReaderService} from '../services/jsonReader.service';
import {ChartRotatorComponent} from '../blocks/chartRotator/chartRotator.component';

@Component({
    selector: 'driveFrameworkTrend',
    templateUrl: 'app/_driveFramework/driveFrameworkTrend.html',
    directives:[RouterLink, ChartRotatorComponent]
})

export class DriveFrameworkTrendComponent {

  public graphSource : String;
  @Input() currentPath : String
  @Input() trends: trendObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService, private location: Location){
    this.graphSource = "D"
  }

  ngOnInit() {
    this.getTrends();
    this.currentPath = this.location.path();
    this.currentPath = this.currentPath.split("/").pop();
  }

  ngAfterViewInit(){
    setTimeout(_=> $("a").click(function(event) {$("footer").removeClass('fadingInFast');}));
    (<any>$("body")).customScrollbar("resize");
    $(".overview").css('top',0);
    $(".thumb").css('top',0);
  }

  getTrends() {
    this._jsonReaderService.getFile("/app/data/driveFramework.data.json").subscribe(
      data => this.trends = data,
      err => console.log(err)
    );
  }

}
