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
    setTimeout(_=> this.setupFlipTrends());
    setTimeout(_=> this.organizeDFDiagram());
  }

  getTrends() {
    this._jsonReaderService.getFile("/app/data/driveFramework.data.json").subscribe(
      data => this.trends = data,
      err => console.log(err)
    )
  }

  organizeDFDiagram(){

    $("<hr class='printOnly-separator pageBreak'/>").insertBefore($(".home-DF-trend-container").eq(1));
    $("<hr class='printOnly-separator pageBreak'/>").insertBefore($(".home-DF-trend-container").eq(3));

    $(".home-DF-trend-container:last").css("margin-bottom",0);
    $(".home-DF-trend-container:last").css("padding-bottom",0);
    $(".home-DF-trend-container:last").find($(".home-DF-question")).css("padding-bottom",15);

    let screenWidth = $(window).width();
    if(screenWidth < 750){
      if($(".workshop-icon").height() > $(".workshop-main").height()){
        $(".workshop-main").height($(".workshop-icon").height());
      } else {

      }

    } else {
      $(".workshop-main").height($(".workshop-inside-wrapper").outerHeight());
      $(".workshop-main").width($(".workshop-inside-wrapper").outerWidth());
      $(".workshop-main").eq(2).css("border-right","1px solid #eee");
      $(".workshop-main").eq(2).width($(".workshop-main").eq(2).width() + 1);
    }

  }

  setupFlipTrends(){

    let topContainerWidth = $(".home-DF-trend-image-container").width();
    $(".home-DF-trend-image-container").height(topContainerWidth);

    $(".home-DF-trend-container").mouseover(function(event) {
      $(event.currentTarget).find(".home-DF-trend-image-container").flip('toggle');
    });
    $(".home-DF-trend-container").mouseout(function(event) {
      $(event.currentTarget).find(".home-DF-trend-image-container").flip('toggle');
    });

    this.flipTrends();

  }

  flipTrends(){
    $(".home-DF-trend-image-container").flip({},function(){});
    if($(".home-DF-trend-image-container").length <= 0){
      setTimeout(_=> this.flipTrends());
    }
  }
}
