///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>
///<reference path="./article.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouterLink, Location} from 'angular2/router';
import {JSONReaderService} from '../services/jsonReader.service';
import {FramedImageComponent} from '../blocks/framedImage/framedImage.component';

@Component({
    selector: 'article',
    templateUrl: 'app/_articles/article-detail.html',
    directives: [RouterLink, FramedImageComponent]
})

export class ArticleDetailComponent {

  @Input() currentPath : String
  @Input() articles: articleObject.RootObject[];

  constructor(private _jsonReaderService: JSONReaderService, private location: Location){
  }

  ngOnInit() {
    this.getArticles();
    this.currentPath = this.location.path();
    this.currentPath = this.currentPath.split("/").pop();
  }

  ngAfterViewInit(){
    setTimeout(_=> {
      $("a").click(function(event) {$(".pageContent").removeClass('fadingInFast');})
    });
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

    let fillingHeight = navbarHeight + paddingTotal;
    let topDistance = screenHeight - pageHeight - fillingHeight + 15;

    if(pageHeight < (screenHeight - fillingHeight)){
      $('footer').css("top",(topDistance + "px"));
    } else {
      $('footer').css("top","0px");
    }

    $(".pageContent").addClass('fadingInFast');

  }

}
