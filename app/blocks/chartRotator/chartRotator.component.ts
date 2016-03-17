///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../../typings/browser/ambient/jquery/jquery.d.ts"/>
///<reference path="../../../typings/browser/ambient/canvasjs/canvasjs.d.ts"/>

import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'chartRotator',
    inputs: ['graphSource'],
    templateUrl: 'app/blocks/chartRotator/chartRotator.html',
    directives: [NgClass]
})

export class ChartRotatorComponent {
  public graphSource : string;

  @Input() fadingIn;

  constructor(){

  }

  ngAfterViewInit(){
    setTimeout(_=> this.initiateCanvasJS());
    setTimeout(_=> this.adjustFooterAndFadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }

  initiateCanvasJS(){

    if($("#canvasjs-graph-1").length <= 0){
      setTimeout(_=> this.initiateCanvasJS());
    } else {
      var chart = new CanvasJS.Chart("canvasjs-graph-1", {
    		title:{
    			text: "My First Chart in CanvasJS"
    		},
    		data: [
    		{
    			// Change type to "doughnut", "line", "splineArea", etc.
    			type: "column",
    			dataPoints: [
    				{ label: "apple",  y: 10  },
    				{ label: "orange", y: 15  },
    				{ label: "banana", y: 25  },
    				{ label: "mango",  y: 30  },
    				{ label: "grape",  y: 28  }
    			]
    		}
    		]
      });
      chart.render();
      $("#canvasjs-graph-1").outerHeight($("#canvasjs-graph-1").find(".canvasjs-chart-canvas").outerHeight());
      setTimeout(_=> this.fadeIn());
    }
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
