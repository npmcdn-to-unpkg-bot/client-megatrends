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
  public isFirefox : Boolean;
  public aboutIS : String;
  @Input() fadingIn;
  @Input() panelCount;
  @Input() trends: trendObject.RootObject[];
  @Input() articles: articleObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService){
    this.aboutIS = "assets/images/partners_temp.jpg"
  }

  ngOnInit() {
    this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    this.calculatePanelCount();
    this.getTrends();
    this.getArticles();
    this.bindClicks();
  }

  ngAfterViewInit(){
    this.arrangeHomeLogo();
    if(!this.isFirefox){
      $(".back").removeClass("deleted");
      setTimeout(_=> this.setupFlipArrows());
      setTimeout(_=> this.setupFlipTrends());
    } else {
    }
    setTimeout(_=> this.stackSections());
    setTimeout(_=> this.fadeIn());
    

    if(this.isFirefox){
      setTimeout(_=> $(".back").addClass("deleted"));
    }

  }

  // On Init

  calculatePanelCount(){
    let screenWidth = $(window).width();
    if(screenWidth > 1200){
      this.panelCount = 4;
    } else if (screenWidth > 1000){
      this.panelCount = 3;
    } else if (screenWidth > 750){
      this.panelCount = 2;
    } else {
      this.panelCount = 1;
    }
  }

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

  fadeIn(){
    this.fadingIn = true;
  }

  // After View Init

  arrangeHomeLogo(){
    let panelWidthCorrection1 = 0;
    let panelWidthCorrection2 = 2;
    if($(window).width() < 1000){
      panelWidthCorrection1 = 2;
      panelWidthCorrection2 = 0;
    }

    let containerWidth = $(".contentContainer").width() - panelWidthCorrection2;
    let marginLength = (containerWidth / 2 * -1) - 1;

    $(".homeLogo-bottom-container").width(containerWidth).css("margin-left",marginLength);
    $(".homeLogo-bottomImage-container").width($(".homeLogo-bottom-container").width() - panelWidthCorrection1);
  }

  stackSections(){

    $(".homeLogo-outer-container").height($(window).height()); // No firefox
    $(".homeLogo-outer-container").height(window.innerHeight);

    let totalTop = 0;
  	$.each( $(".homeSection"), function( i, section ) {
      $(this).css('top',totalTop);
      totalTop = totalTop + $(this).outerHeight();
  	});
    $(".home-top-container").height(totalTop);

    $("footer").css("position","absolute");
    $("footer").css('top',totalTop);

  }

  bindClicks(){

    $(".home-slider-link").click(function() {
      let sectionTop = $("#" + $(this).attr('href')).offset().top;
      $("body").stop().animate({scrollTop:(sectionTop)}, 1000,'easeInOutExpo',function(){
      });
    });

    $(".homeLogo-bottomText-container").click(function() {
      $(".home-slider-link[href='hs-driveFramework']").trigger('click');
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
