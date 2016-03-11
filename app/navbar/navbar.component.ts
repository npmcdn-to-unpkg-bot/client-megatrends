///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component, Directive, Input, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';
import {SuperLink} from '../blocks/superLink/superLink.directive';

@Directive({
  selector: "[navbar-link-hover]",
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
class Hover {
  onMouseEnter() { $('.navbar-hoverContainer').removeClass("fadingOutFast").addClass("fadingInFast"); }
  onMouseLeave() { $('.navbar-hoverContainer').removeClass("fadingInFast").addClass("fadingOutFast"); }
}

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.html',
  outputs:['mobileMenuTrigger', 'navbarLinkTrigger'],
  directives: [RouterLink, SuperLink, Hover, CORE_DIRECTIVES]
})
export class NavbarComponent {
  @Input() routes: RouteDefinition[];
  public mobileMenuTrigger: EventEmitter<any> = new EventEmitter();
  public navbarLinkTrigger: EventEmitter<any> = new EventEmitter();
  constructor(){
  }
  handleSuperLink(){
    this.navbarLinkTrigger.next(null);
  }
  toggleMobileMenu(){
    this.mobileMenuTrigger.next(null);
  }
}
