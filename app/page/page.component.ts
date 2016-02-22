///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';

@Component({
    selector: 'page',
    templateUrl: 'app/page/page.html'
})
export class PageComponent {

  broserDOM: BrowserDomAdapter;

  constructor() {
    this.broserDOM = new BrowserDomAdapter();
  }

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
        this.broserDOM.setAttribute(this.broserDOM.query('page'),'style',heightString);
    }

  }
}
