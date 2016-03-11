///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

import {Component, Input} from 'angular2/core';

import {RouteDefinition, RouterOutlet, Router} from 'angular2/router';
import {APP_ROUTES} from '../app.routes';

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

  public appRoutes: RouteDefinition[];
  public pathName : String;
  public mobileMenuVisible : Boolean;

  constructor(private router: Router) {
    this.appRoutes = APP_ROUTES;
    this.mobileMenuVisible = false;
    router.subscribe((val) => {
      console.log(val);
      this.closeMobileMenu();
      this.expandHeight();
    });
  }

  ngAfterViewInit(){
    this.expandHeight();
    this.setupNavbarMobileMenu();
  }

  handleSuperLink(){
    /*
    console.log("Ilyas");
    this.closeMobileMenu();
    this.expandHeight();
    */
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
    $("footer").removeClass("footerAbsolute");
    this.mobileMenuVisible = false;
  }

  handleMobileMenuToggle(){
    if(this.mobileMenuVisible){
      $('.navbar-mobileMenu-button-icon').removeClass("fa-times").addClass("fa-bars");
      $('.navbar-mobileMenu-container').removeClass("fadingInFast").addClass("fadingOutFast");
      $("footer").removeClass("footerAbsolute");
      this.mobileMenuVisible = false;
    } else {
      $('.navbar-mobileMenu-button-icon').removeClass("fa-bars").addClass("fa-times");
      $('.navbar-mobileMenu-container').removeClass("fadingOutFast").addClass("fadingInFast");
      $("footer").addClass("footerAbsolute");
      this.mobileMenuVisible = true;
    }
  }

  expandHeight(){
    let screenHeight = $(window).outerHeight();
    let navbarHeight = $("navbar").outerHeight();
    let footerHeight = $("footer").outerHeight();
    let pageHeight = $(".pageContent").outerHeight();
    let paddingTotal = 30;

    let fillingHeight = navbarHeight + footerHeight + paddingTotal;

    if(pageHeight <= (screenHeight - fillingHeight)){
      $("footer").addClass("footerAbsolute");
    } else {
      $("footer").removeClass("footerAbsolute");
    }
  }

}
