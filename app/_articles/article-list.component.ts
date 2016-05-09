///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>

///<reference path="./article.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {JSONReaderService} from '../services/jsonReader.service';

@Component({
    selector: 'article',
    templateUrl: 'app/_articles/article-list.html',
    directives: [RouterLink]
})

export class ArticleListComponent {

  @Input() articles: articleObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService){

  }

  ngOnInit() {
    this.getArticles();
  }

  ngAfterViewInit(){
    setTimeout(_=> $("a").click(function(event) {$(".pageContent").removeClass('fadingInFast');}));
  }

  getArticles() {
    this._jsonReaderService.getFile("/app/data/articles.data.json").subscribe(
      data => this.articles = data,
      err => console.log(err),
      () => setTimeout(_=>this.adjustFooterAndFadeIn())

    );
  }

  adjustFooterAndFadeIn(){

    let screenHeight = $(window).outerHeight();
    let navbarHeight = $("navbar").outerHeight();
    let footerHeight = $("footer").outerHeight();
    let pageHeight = $(".pageContent").outerHeight();
    let paddingTotal = 30;

    let fillingHeight = navbarHeight + footerHeight + paddingTotal;
    let topDistance = screenHeight - pageHeight;

    if(pageHeight <= (screenHeight - fillingHeight)){
      $('footer').css("top",(topDistance + "px"));
    } else {
      $('footer').css("top","0px");
    }

    $(".pageContent").addClass('fadingInFast');

  }
}
