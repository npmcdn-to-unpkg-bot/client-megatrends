///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../../typings/browser/ambient/jquery/jquery.d.ts"/>
///<reference path="../../../typings/browser/ambient/canvasjs/canvasjs.d.ts"/>

///<reference path="./graph.d.ts"/>

import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {JSONReaderService} from '../../services/jsonReader.service';

@Component({
    selector: 'chartRotator',
    inputs: ['graphSource'],
    templateUrl: 'app/blocks/chartRotator/chartRotator.html',
    directives: [NgClass]
})

export class ChartRotatorComponent {
  public graphSource : string;

  @Input() graphs: graphObject.RootObject[];
  @Input() fadingIn;

  constructor(private _jsonReaderService: JSONReaderService){

  }

  ngOnInit() {
    this.getGraphs();
  }

  ngAfterViewInit(){
    setTimeout(_=> this.initiateCanvasJS());
    setTimeout(_=> this.adjustFooterAndFadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }

  getGraphs() {
    this._jsonReaderService.getFile("../app/data/graphs.data.json").subscribe(
      data => this.graphs = data,
      err => console.log(err)
    );
  }

  initiateCanvasJS(){

    this.deployGraphSet();

    //if($("#" + this.graphs[0].id).length <= 0){
    /*
    console.log($("graph").length);
    if($("graph").length <= 0){
      setTimeout(_=> this.initiateCanvasJS());
    } else {
      this.deployGraphSet();
    }
    */
  }

  deployGraphSet(){
    let graphCounter = 1;
    let graphCount = $('.graph').length;
    let graphWidth = $('.chartRotator-outer-container').outerWidth();
    $('.chartRotator-inner-container').outerWidth(graphCount * graphWidth);

    if($('.graph').length <= 1){
      $(".chartRotator-button-left").removeClass("is-clickable");
    }

    if(graphCounter > 1){
      $(".chartRotator-button-left").addClass("is-clickable");
    }

    $(".chartRotator-button").click(function(event) {

      var direction = $(this).attr("data-direction");
      var currentPosition = $('.chartRotator-inner-container').offset().left;

      if($(this).hasClass("is-clickable")){


        if(direction=="left"){
          if(graphCounter <= 1){graphCounter = 1;} else {graphCounter--;}
        } else {
          if(graphCounter > graphCount - 1){graphCounter = graphCount;} else {graphCounter++;}
        }


        var distance = -1 * graphWidth * (graphCounter-1);

        $(".chartRotator-inner-container").stop().animate({left:distance}, 300,'easeInOutExpo',function(){

          if(graphCounter <= 1){ $(".chartRotator-button-left").removeClass("is-clickable");}
          if(graphCounter > 1){ $(".chartRotator-button-left").addClass("is-clickable");}

          if(graphCounter < graphCount){ $(".chartRotator-button-right").addClass("is-clickable");}
          if(graphCounter >= graphCount){ $(".chartRotator-button-right").removeClass("is-clickable");}

        });
      }

    });

    let graphDataSetLocal = this.graphs;

    $('.graph').each(function(){

      $(this).parent().outerWidth(graphWidth);
      $(this).outerWidth(graphWidth);
      let graphId = $(this).attr("id");

      let currentGraphData;
      $(graphDataSetLocal).each(function(){
        if($(this)[0].id == graphId){
          currentGraphData = $(this)[0]
        }
      });

      var chart = new CanvasJS.Chart(graphId,
      {
        animationEnabled: true,
        title:{
          text: "",
        },
        axisX: {
          "gridColor": "#eee",
          "labelFontFamily": "'Optima'"
        },
        axisY: {
          "gridColor": "#eee",
          "labelFontFamily": "'Optima'"
        },
        data: currentGraphData.data
      });

      chart.render();

      $('.chartRotator-outer-container').outerHeight(
        $('.chartRotator-outer-container').find(".canvasjs-chart-canvas").outerHeight()
      + $('.chartRotator-outer-container').find(".chartRotator-text-container").outerHeight()
      + 30
      );

    });

    setTimeout(_=> this.fadeIn());
  }

  adjustFooterAndFadeIn(){

    let screenHeight = $(window).outerHeight();
    let navbarHeight = $("navbar").outerHeight();
    let footerHeight = $("footer").outerHeight();
    let pageHeight = $("page").outerHeight();
    let paddingTotal = 30;

    let fillingHeight = navbarHeight + footerHeight + paddingTotal;
    let topDistance = screenHeight - pageHeight;

    if(pageHeight <= (screenHeight - fillingHeight)){
      $('footer').css("top",(topDistance + "px"));
    } else {
      $('footer').css("top","0px");
    }

    $("footer").addClass('fadingInFast');

  }
}
