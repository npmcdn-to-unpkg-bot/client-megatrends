import {RouteDefinition} from 'angular2/router';
import {ArticleListComponent} from '../_articles/article-list.component';
import {ArticleDetailComponent} from '../_articles/article-detail.component';

export var ARTICLE_ROUTES: RouteDefinition[] = [

    { path: '/',
      name: 'Article List',
      component: ArticleListComponent,
      useAsDefault: true},

    { path: '/:id',
      name: 'Article Detail',
      component: ArticleDetailComponent}
];
