///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';

@Component({
  selector: 'navbar-mobileMenu',
  templateUrl: 'app/navbar/mobileMenu/mobileMenu.html',
  directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarMobileMenuComponent {
  @Input() routes: RouteDefinition[];
  constructor(){
  }
}
