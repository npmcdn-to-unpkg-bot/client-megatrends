///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'article',
    templateUrl: 'app/_articles/article-list.html',
    directives: [RouterLink]
})

export class ArticleListComponent {

}
