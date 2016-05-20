///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import 'rxjs/add/operator/map';

import {JSONReaderService} from './services/jsonReader.service'

//import {enableProdMode} from 'angular2/core';
// enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  JSONReaderService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
