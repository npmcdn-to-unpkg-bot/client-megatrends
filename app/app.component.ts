import {Component,Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {RouteConfig} from 'angular2/router';
import {APP_ROUTES} from './app.routes';
import {SpinnerComponent} from './spinner/spinner.component';
import {PageComponent} from './page/page.component';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    inputs: ['fadingOut'],
    directives: [NgClass, PageComponent, SpinnerComponent]
})

@RouteConfig(APP_ROUTES)

export class AppComponent {

  @Input() fadingIn;

  constructor() {
  }

  ngAfterViewInit(){
    setTimeout(_=> this.fadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }

}
