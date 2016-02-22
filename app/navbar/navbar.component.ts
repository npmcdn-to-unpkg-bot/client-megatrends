///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.html',
    directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarComponent {
    @Input() routes: RouteDefinition[];
}
