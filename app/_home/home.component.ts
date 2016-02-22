///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/_home/home.html'
})

export class HomeComponent {
  ngAfterViewInit(){

    /*
    let screenHeight = document.getElementById("app").offsetHeight;
    console.log(screenHeight);

    console.log("Page height " + document.getElementById("page").offsetHeight);
    */
  }
}
