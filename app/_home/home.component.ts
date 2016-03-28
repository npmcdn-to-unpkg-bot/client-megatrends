///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.flip.d.ts"/>

///<reference path="../_driveFramework/driveFrameworkTrend.d.ts"/>
///<reference path="../_articles/article.d.ts"/>

import {Component, Input, Query} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FramedImageComponent} from '../blocks/framedImage/framedImage.component';
import {JSONReaderService} from '../services/jsonReader.service';

@Component({
    selector: 'home',
    templateUrl: 'app/_home/home.html',
    directives:[RouterLink, FramedImageComponent]
})

export class HomeComponent {
  public aboutIS : String;
  @Input() fadingIn;
  @Input() trends: trendObject.RootObject[];
  @Input() articles: articleObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService){
    this.aboutIS = "assets/images/partners_temp.jpg"
  }

  ngOnInit() {
    this.getTrends();
    this.getArticles();
    this.bindClicks();
  }

  ngAfterViewInit(){

    setTimeout(_=> this.setupFlipArrows());
    setTimeout(_=> this.setupFlipTrends());
    setTimeout(_=> this.stackSections());
    //setTimeout(_=> this.fadeIn());

    /*
    setTimeout(_=>
      this.setupFlipArrows(_=>
        this.setupFlipTrends(_=>
          this.stackSections())));
    */
  }

  // On Init

  getTrends() {
    this._jsonReaderService.getFile("/app/data/driveFramework.data.json").subscribe(
      data => this.trends = data,
      err => console.log(err)
    )
  }

  getArticles() {
    this._jsonReaderService.getFile("/app/data/articles.data.json").subscribe(
      data => this.articles = data,
      err => console.log(err)
    );
  }

  /*
  fadeIn(){
    this.fadingIn = true;
  }
  */

  // After View Init

  stackSections(){

    $(".homeLogo-outer-container").height($(window).height());
    let totalTop = 0;
  	$.each( $(".homeSection"), function( i, section ) {
      $(this).css('top',totalTop);
      totalTop = totalTop + $(this).outerHeight();
      console.log();
  	});
    $(".home-top-container").height(totalTop);

    this.fadingIn = true;

    /*
    if($(".home-DF-trend-container").length <= 0){
      setTimeout(_=> this.stackSections());
    }
    */

  }

  bindClicks(){
    let containerWidth = $(".container").width() - 2;
    let marginLength = (containerWidth / 2 * -1) - 1;

    $(".homeLogo-bottom-container").width(containerWidth).css("margin-left",marginLength);

    $(".home-slider-link").click(function() {

      let sectionTop = $("#" + $(this).attr('href')).offset().top;

      $(".overview").stop().animate({top:(-1 * sectionTop)}, 1000,'easeInOutExpo',function(){
      });
      $(".thumb").stop().animate({top:(-1 * sectionTop)}, 1000,'easeInOutExpo',function(){
      });

    });
  }

  setupFlipArrows(){

    $(".homeLogo-bottom-container").mouseover(function(event) {
      $(event.currentTarget).find(".homeLogo-arrow-container").flip('toggle');
    });
    $(".homeLogo-bottom-container").mouseout(function(event) {
      $(event.currentTarget).find(".homeLogo-arrow-container").flip('toggle');
    });

    this.flipArrows();

  }

  flipArrows(){
    $(".homeLogo-arrow-container").flip({},function(){
      $(".homeLogo-arrow-container").height($(".homeLogo-image-arrow").height());
    });
    if($(".homeLogo-arrow-container").length <= 0){
      setTimeout(_=> this.flipArrows());
    }
  }

  setupFlipTrends(){

    /*
    let topContainerWidth = $(".home-DF-trend-image-container").width();
    $(".home-DF-trend-image-container").height(topContainerWidth);

    console.log($(".home-DF-trend-image-container"));

    $(".home-DF-trend-image-container").css("top",$(".home-DF-trend-image-container").position().left);

    $(".home-DF-trend-container").mouseover(function(event) {
      $(event.currentTarget).find(".home-DF-trend-image-container").flip('toggle');
    });
    $(".home-DF-trend-container").mouseout(function(event) {
      $(event.currentTarget).find(".home-DF-trend-image-container").flip('toggle');
    });
    */

    this.flipTrends();

  }

  flipTrends(){
    $(".home-DF-trend-image-container").flip({},function(){});
    if($(".home-DF-trend-image-container").length <= 0){
      setTimeout(_=> this.flipTrends());
    }
  }

}
