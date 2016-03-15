///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
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

  getArticles() {
    this._jsonReaderService.getFile("/app/data/articles.data.json").subscribe(
      data => this.articles = data,
      err => console.log(err)
    );
  }
}
