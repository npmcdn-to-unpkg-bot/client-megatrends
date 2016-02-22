///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component,Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'spinner',
    templateUrl: 'app/spinner/spinner.html',
    directives: [NgClass]
})
export class SpinnerComponent {

  @Input() fadingOut;

  ngAfterViewInit(){
    setTimeout(_=> this.fadeOut());
  }

  fadeOut(){
    this.fadingOut = true;
  }

}
