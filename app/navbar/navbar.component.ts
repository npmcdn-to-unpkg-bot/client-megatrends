///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Directive, Input, Host, HostListener} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass} from 'angular2/common';
import {BrowserDomAdapter} from 'angular2/platform/browser';
import {RouterLink, RouteDefinition} from 'angular2/router';

@Directive({
    selector: "[navbar-link-hover]",
    /*
    host: {
      '(mouseenter)': 'onMouseEnter()',
      '(mouseleave)': 'onMouseLeave()'
    }
    */
})
class Hover {

    @Input() fadingIn; fadingOut;

    constructor() {
      this.broserDOM = new BrowserDomAdapter();
    }

    broserDOM: BrowserDomAdapter;

    /*
    onMouseEnter() { this.fadeIn(); }
    onMouseLeave() { this.fadeOut(); }
    */

    @HostListener('mouseenter', ['$event.target'])
    onMouseEnter(btn) {
      console.log("Mouse entered kemal");
      console.log(btn);
      this.broserDOM.query('.navbar-hoverContainer').fadingIn = true;
      this.broserDOM.query('.navbar-hoverContainer').fadingOut = false;
    }

    fadeIn(){

      console.log("In");

      this.broserDOM.query('.navbar-hoverContainer').fadingIn = true;
      this.broserDOM.query('.navbar-hoverContainer').fadingOut = false;
      //@HostBinding('[class.valid]') get valid { return this.control.valid; }
      //this.broserDOM.setAttribute(this.broserDOM.query('.navbar-hoverContainer'),'style','display:block;');
    }

    fadeOut(){

      console.log("Out");

      this.broserDOM.query('.navbar-hoverContainer').fadingIn = false;
      this.broserDOM.query('.navbar-hoverContainer').fadingOut = true;
    }
}

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.html',
  directives: [RouterLink, NgClass, Hover, CORE_DIRECTIVES]
})
export class NavbarComponent {
  @Input() routes: RouteDefinition[];
  @Input() fadingIn;
  constructor(){
    //this.fadingIn = true;
  }
}
