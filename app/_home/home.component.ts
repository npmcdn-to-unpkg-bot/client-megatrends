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
  @Input() panelCount;
  @Input() trends: trendObject.RootObject[];
  @Input() articles: articleObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService){
    this.aboutIS = "assets/images/Team_Labels.jpg"
    this.getTrends();
    this.getArticles();
  }

  ngOnInit() {
    this.calculatePanelCount();
    this.bindClicks();
  }

  ngAfterViewInit(){
    this.arrangeHomeLogo();
    //setTimeout(_=> this.setupFlipArrows());
    setTimeout(_=> this.setupFlipTrends());
    setTimeout(_=> this.organizeDFDiagram());
    setTimeout(_=> this.fadeIn());
  }

  // Constructor

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

  organizeDFDiagram(){

    $("<hr class='printOnly-separator pageBreak'/>").insertBefore($(".home-DF-trend-container").eq(1));
    $("<hr class='printOnly-separator pageBreak'/>").insertBefore($(".home-DF-trend-container").eq(3));

    $(".home-DF-trend-container:last").css("margin-bottom",0);
    $(".home-DF-trend-container:last").css("padding-bottom",0);
    $(".home-DF-trend-container:last").children(".home-DF-question").css("padding-bottom",15);

  }

  fadeIn(){
    this.fadingIn = true;
  }

  // After View Init

  arrangeHomeLogo(){
    $(".homeLogo-outer-container").height($(window).height()); // No firefox
    $(".homeLogo-outer-container").height(window.innerHeight);

    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    let bottomPanelHeight = $(".homeLogo-bottom-container").height();
    let textHeight = $(".main-text-mobile").height();
    if(screenWidth >= 650){
      textHeight = $(".main-text-mobile").height() + 60;
      if(screenWidth >= 750){
        textHeight = $(".main-text").height() + 60;
      }
    }
    let menuHeight = $(".homeLogo-bottomImage-container").height();

    $(".homeLogo-inner-wrapper").height(screenHeight - bottomPanelHeight);
    $(".homeLogo-bottomImage-container").width( $(".homeLogo-bottomImage-container").width() - 2);
    $(".homeLogo-bottomImage-container").css("margin-top",(bottomPanelHeight - textHeight - menuHeight + 1));
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
