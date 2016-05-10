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

    $(".conainer-image-frame").each(function( image ) {

      let topContainerWidth = $(this).width();
      let topContainerHeight = $(this).height();

      let topContainerLeft = $(this).position().left;
      let topContainerTop = $(this).position().top;

      if(topContainerHeight <= 0){
        topContainerHeight = topContainerWidth;
        $(this).height(topContainerWidth);
      }

      $(this).next().width(topContainerWidth * imageToFrameRatio);
      $(this).next().height(topContainerHeight * imageToFrameRatio);
      $(this).next().css("border-radius",(topContainerWidth * imageToFrameRatio * 0.5));
      $(this).next().css("left",(topContainerWidth * (1-imageToFrameRatio) * 0.5) + (topContainerLeft));
      $(this).next().css("top",(topContainerHeight * (1-imageToFrameRatio) * 0.5) + topContainerTop);

    });

    //this.fadingIn = true;
  }
}
