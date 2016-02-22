import {
  it,
  inject,
  describe,
  expect,
  beforeEachProviders
} from 'angular2/testing';
import { AppComponent } from './app.component';
import { LoggerService } from './blocks/logger.service';

describe('AppComponent', () => {

  beforeEachProviders(() => [LoggerService]);

  it('should load successfully',inject([LoggerService], (logger) => {
    let app = new AppComponent(logger);
  }));

});
