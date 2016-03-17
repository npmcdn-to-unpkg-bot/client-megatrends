///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component, Input} from 'angular2/core';

import {RouteDefinition, RouterOutlet, Router} from 'angular2/router';

import {CORE_DIRECTIVES} from 'angular2/common';

import {NavbarComponent} from '../navbar/navbar.component';
import {NavbarMobileMenuComponent} from '../navbar/mobileMenu/mobileMenu.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'page',
  templateUrl: 'app/page/page.html',
  directives:[
    RouterOutlet,
    NavbarComponent,
    NavbarMobileMenuComponent,
    FooterComponent,
    CORE_DIRECTIVES]
})
export class PageComponent {

  public pathName : String;
  public mobileMenuVisible : Boolean;

  constructor(private router: Router) {
    this.mobileMenuVisible = false;
    router.subscribe((path) => {
      $("a").click(function(event) {$("footer").removeClass('fadingInFast');});
      this.closeMobileMenu();
      this.adjustFooterAndFadeIn();
    });
  }

  ngAfterViewInit(){
    $("a").click(function(event) {$("footer").removeClass('fadingInFast');});
    this.adjustFooterAndFadeIn();
    this.setupNavbarMobileMenu();
  }

  setupNavbarMobileMenu(){
    let screenHeight = $(window).outerHeight();
    let navbarHeight = $("navbar").outerHeight();
    let footerHeight = $("footer").outerHeight();

    let fillingHeight = screenHeight - navbarHeight - footerHeight;

    $(".navbar-mobileMenu-container").height(fillingHeight + 1);
    $(".navbar-mobileMenu-container").css('top',(navbarHeight - 1));
  }

  closeMobileMenu(){
    $('.navbar-mobileMenu-button-icon').removeClass("fa-times").addClass("fa-bars");
    $('.navbar-mobileMenu-container').removeClass("fadingInFast").addClass("fadingOutFast");
    $("footer").removeClass('fadingInFast');
    this.mobileMenuVisible = false;
  }

  handleMobileMenuToggle(){
    if(this.mobileMenuVisible){

      this.closeMobileMenu();

    } else {
      $('.navbar-mobileMenu-button-icon').removeClass("fa-bars").addClass("fa-times");
      $('.navbar-mobileMenu-container').removeClass("fadingOutFast").addClass("fadingInFast");


      let topDistance = $(window).outerHeight()
      - $('footer').outerHeight()
      - $(".pageContent").outerHeight()
      - $("navbar").outerHeight();

      $('footer').css("top",topDistance + "px");
      $("footer").addClass('fadingInFast');

      this.mobileMenuVisible = true;
    }
  }

  adjustFooterAndFadeIn(){

    let screenHeight = $(window).outerHeight();
    let navbarHeight = $("navbar").outerHeight();
    let footerHeight = $("footer").outerHeight();
    let pageHeight = $("page").outerHeight();
    let paddingTotal = 30;

    let fillingHeight = navbarHeight + footerHeight + paddingTotal;
    let topDistance = screenHeight - pageHeight;

    if(pageHeight <= (screenHeight - fillingHeight)){
      $('footer').css("top",(topDistance + "px"));
    } else {
      $('footer').css("top","0px");
    }

    $("footer").addClass('fadingInFast');

  }

}
