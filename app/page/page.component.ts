///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';

import {RouteDefinition, RouterOutlet} from 'angular2/router';
import {APP_ROUTES} from '../app.routes';

import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';

import {HomeComponent} from '../_home/home.component';

@Component({
    selector: 'page',
    templateUrl: 'app/page/page.html',
    directives:[RouterOutlet, NavbarComponent, FooterComponent, HomeComponent]
})

export class PageComponent {

  public appRoutes: RouteDefinition[];
  constructor() {
    this.appRoutes = APP_ROUTES;
    this.broserDOM = new BrowserDomAdapter();
  }

  broserDOM: BrowserDomAdapter;

  ngAfterViewInit(){
    setTimeout(_=> this.expandHeight());
  }

  expandHeight(){
    let screenHeight = this.broserDOM.query('body').offsetHeight;
    let navbarHeight = this.broserDOM.query('navbar').offsetHeight;
    let footerHeight = this.broserDOM.query('footer').offsetHeight;
    let pageHeight = this.broserDOM.query('page').offsetHeight;
    let paddingTotal = 30;

    let fillingHeight = screenHeight - navbarHeight - footerHeight - paddingTotal;
    let heightString = 'height:' + fillingHeight + 'px';

    if(screenHeight > (navbarHeight + pageHeight + footerHeight)){
        this.broserDOM.setAttribute(this.broserDOM.query('.pageContent'),'style',heightString);
    }

  }
}
