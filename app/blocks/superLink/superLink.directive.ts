///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Directive, EventEmitter} from 'angular2/core';

@Directive({
  selector: "[superLink]",
  outputs:['superLinkTrigger'],
  host: {
    '(click)': 'onClick()'
  }
})
export class SuperLink {
  public superLinkTrigger: EventEmitter<any> = new EventEmitter();
  constructor(){
  }
  onClick(){
    this.superLinkTrigger.next(null);
  }
}
