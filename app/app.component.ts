import {Component,Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {RouteConfig} from 'angular2/router';
import {SpinnerComponent} from './spinner/spinner.component';
import {PageComponent} from './page/page.component';
import {FramedImageComponent} from './blocks/framedImage/framedImage.component';

import {APP_ROUTES} from './app.routes';
import {DRIVEFRAMEWORK_ROUTES} from './_driveFramework/driveFramework.routes';
import {ARTICLE_ROUTES} from './_articles/article.routes';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [NgClass, PageComponent, SpinnerComponent, FramedImageComponent]
})

@RouteConfig(APP_ROUTES)

export class AppComponent {

  @Input() fadingIn;

  constructor() {
  }

  ngAfterViewInit(){
    (<any>$("body")).customScrollbar({
      skin: "default-skin",
      vScroll: true,
      hScroll: false,
      updateOnWindowResize: true
    });

    setTimeout(_=> this.fadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }
}
