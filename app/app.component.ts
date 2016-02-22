import {Component,Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from './app.routes';
import {SpinnerComponent} from './spinner/spinner.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet, NgClass, SpinnerComponent, NavbarComponent, FooterComponent]
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
  public appRoutes: RouteDefinition[];
  private logger: LoggerService;

  @Input() fadingIn;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.logger.log('Hello!');
    this.appRoutes = APP_ROUTES;

  }

  ngAfterViewInit(){
    setTimeout(_=> this.fadeIn());
  }

  fadeIn(){
    this.fadingIn = true;
  }

}
