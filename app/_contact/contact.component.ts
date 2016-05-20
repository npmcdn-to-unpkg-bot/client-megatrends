///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/_contact/contact.html'
})

export class ContactComponent {

  ngAfterViewInit(){

    setTimeout(_=> this.arrangeMainBox());

  }

  arrangeMainBox(){

    let screenHeight = window.innerHeight;
    let mainBoxHeight = $(".contact-box").outerHeight();
    let hiddenBoxHeight = $(".hidden-box").outerHeight();
    let navbarHeight = $("navbar").outerHeight();
    let footerHeight = $("footer").outerHeight();

    let margin = (screenHeight - navbarHeight - footerHeight - mainBoxHeight - hiddenBoxHeight - 65) / 2;
    $(".contact-box").css("position","relative");
    $(".contact-box").css("top",margin);

  }

}
