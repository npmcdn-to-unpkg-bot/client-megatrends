///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'framedImage',
    inputs: ['imageSource'],
    templateUrl: 'app/blocks/framedImage/framedImage.html',
    directives: [NgClass]
})

export class FramedImageComponent {
  public imageSource : string;

  @Input() fadingIn;

  constructor(){

  }

  ngAfterViewInit(){
    setTimeout(_=> this.fadeIn());
  }

  fadeIn(){
    let imageToFrameRatio = 0.6;

    let topContainerWidth = $(".conainer-image-frame").width();
    let topContainerHeight = $(".conainer-image-frame").height();

    let topContainerLeft = $(".conainer-image-frame").position().left;
    let topContainerTop = $(".conainer-image-frame").position().top;

    if(topContainerHeight <= 0){
      topContainerHeight = topContainerWidth;
      $(".conainer-image-frame").height(topContainerWidth);
    }

    $(".conainer-image-inner").width(topContainerWidth * imageToFrameRatio);
    $(".conainer-image-inner").height(topContainerHeight * imageToFrameRatio);
    $(".conainer-image-inner").css("border-radius",(topContainerWidth * imageToFrameRatio * 0.5));
    $(".conainer-image-inner").css("left",(topContainerWidth * (1-imageToFrameRatio) * 0.5) + (topContainerLeft));
    $(".conainer-image-inner").css("top",(topContainerHeight * (1-imageToFrameRatio) * 0.5) + topContainerTop);

    //this.fadingIn = true;
  }
}
