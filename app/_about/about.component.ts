///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {FramedImageComponent} from '../blocks/framedImage/framedImage.component';

@Component({
    selector: 'about',
    templateUrl: 'app/_about/about.html',
    directives:[FramedImageComponent]
})

export class AboutComponent {
  public aboutIS : String;
  constructor(){
    this.aboutIS = "assets/images/Team_Labels.jpg"
  }
}
