///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: 'app/_home/home.html',
    directives:[RouterLink]
})

export class HomeComponent {

  @Input() fadingIn;


  ngOnInit() {
    //$(".homeLogo-outer-container").width($(window).width() -17);
    $(".homeLogo-outer-container").height($(window).height());
    this.stackSections();
  }

  ngAfterViewInit(){
    setTimeout(_=> this.fadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }

  stackSections(){

    let totalTop = 0;

  	$.each( $(".homeSection"), function( i, section ) {

      $(this).css('top',totalTop);
      totalTop = totalTop + $(this).outerHeight();
      console.log("Orhan");
  	});

    $("page").height(totalTop);

  }

}
