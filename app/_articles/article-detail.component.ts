///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../../typings/browser/ambient/jquery/jquery.d.ts"/>
///<reference path="./article.d.ts"/>

import {Component, Input} from 'angular2/core';
import {RouterLink, Location} from 'angular2/router';
import {JSONReaderService} from '../services/jsonReader.service';

@Component({
    selector: 'article',
    templateUrl: 'app/_articles/article-detail.html',
    directives: [RouterLink]
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
    setTimeout(_=> $("a").click(function(event) {$("footer").removeClass('fadingInFast');}));
  }

  getArticles() {
    this._jsonReaderService.getFile("/app/data/articles.data.json").subscribe(
      data => this.articles = data,
      err => console.log(err)
    );
  }

}
