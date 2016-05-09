import {RouteDefinition} from 'angular2/router';
import {DriveFrameworkDiagramComponent}
  from '../_driveFramework/driveFrameworkDiagram.component';
import {DriveFrameworkTrendComponent}
  from '../_driveFramework/driveFrameworkTrend.component';

import {ArticleDetailComponent} from '../_articles/article-detail.component';

export var DRIVEFRAMEWORK_ROUTES: RouteDefinition[] = [

  { path: '/',
    name: 'Drive Framework Diagram',
    component: DriveFrameworkDiagramComponent,
    useAsDefault: true},

  { path: '/:id',
    name: 'Drive Framework Trend',
    component: DriveFrameworkTrendComponent},

  { path: '../articles/:id',
    name: 'Article Detail',
    component: ArticleDetailComponent}

];
