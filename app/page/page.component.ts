///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';

import {RouteDefinition, RouterOutlet, Router} from 'angular2/router';
import {APP_ROUTES} from '../app.routes';

import {CORE_DIRECTIVES} from 'angular2/common';

import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';

interface JQuery {
    fadeIn(): JQuery;
    fadeOut(): JQuery;
    focus(): JQuery;
    html(): string;
    html(val: string): JQuery;
    show(): JQuery;
    addClass(className: string): JQuery;
    removeClass(className: string): JQuery;
    append(el: HTMLElement): JQuery;
    val(): string;
    val(value: string): JQuery;
    attr(attrName: string): string;
}

declare var $: {
    (el: HTMLElement): JQuery;
    (selector: string): JQuery;
    (readyCallback: () => void ): JQuery;
};

@Component({
  selector: 'page',
  templateUrl: 'app/page/page.html',
  directives:[RouterOutlet, NavbarComponent, FooterComponent, CORE_DIRECTIVES]
})
export class PageComponent {

  public appRoutes: RouteDefinition[];
  public pathName : String;

  constructor(private router: Router) {

    console.log($(".pageContent"));

    this.appRoutes = APP_ROUTES;
    this.broserDOM = new BrowserDomAdapter();
    router.subscribe((path) => {
        // this.pathName = path; To be fixed the page flickering
        setTimeout(_=> this.expandHeight());
      }
    );
  }

  broserDOM: BrowserDomAdapter;

  /*
  ngAfterViewInit(){

  }

  */

  expandHeight(){

    console.log($(".pageContent"));

    let screenHeight = this.broserDOM.query('body').offsetHeight;
    let navbarHeight = this.broserDOM.query('navbar').offsetHeight;
    let footerHeight = this.broserDOM.query('footer').offsetHeight;
    let pageHeight = this.broserDOM.query('.pageContent').offsetHeight;
    let paddingTotal = 30;

    let fillingHeight = screenHeight - navbarHeight - footerHeight - paddingTotal;
    let heightString = 'height:' + fillingHeight + 'px';

    if(screenHeight > (navbarHeight + pageHeight + footerHeight)){
      this.broserDOM.setAttribute(this.broserDOM.query('.pageContent'),'style',heightString);
    }

  }
}
