///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.flip.d.ts"/>

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

  ngAfterViewInit(){
    setTimeout(_=> this.listenFlipCards());
    setTimeout(_=> $("a").click(function(event) {$("footer").removeClass('fadingInFast');}));
  }

  getTrends() {
    this._jsonReaderService.getFile("/app/data/driveFramework.data.json").subscribe(
      data => this.trends = data,
      err => console.log(err)
    );
  }

  listenFlipCards(){

    $(".driveFrameworkDiagram-trendConainer" ).mouseover(function(event) {
      $(event.currentTarget).find(".trendCard-container").flip('toggle');
      $(event.currentTarget).find(".trend-header").removeClass('color-navy-important');
    });
    $(".driveFrameworkDiagram-trendConainer").mouseout(function(event) {
      $(event.currentTarget).find(".trendCard-container").flip('toggle');
      $(event.currentTarget).find(".trend-header").addClass('color-navy-important');
    });

    this.flipCards();
  }

  flipCards(){
    $(".trendCard-container").flip({},function(){
      $(".driveFrameworkDiagram-icon-container").height($(".driveFrameworkDiagram-icon").height());
    });
    if($(".trendCard-container").length <= 0){
      setTimeout(_=> this.flipCards());
    }
  }
}
