///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ARTICLE_ROUTES} from '../_articles/article.routes';

@Component({
    selector: 'articles',
    templateUrl: 'app/_articles/articles.html',
    directives: [RouterOutlet]
})

@RouteConfig(ARTICLE_ROUTES)

export class ArticlesComponent {
}
