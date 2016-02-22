import {Component,Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {RouterOutlet, RouteConfig} from 'angular2/router';
import {APP_ROUTES} from './app.routes';
import {SpinnerComponent} from './spinner/spinner.component';

import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet, NgClass, SpinnerComponent]
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
  private logger: LoggerService;

  @Input() fadingIn;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.logger.log('Hello!');
  }

  ngAfterViewInit(){
    setTimeout(_=> this.fadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }

}
