/// <reference path="../../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../../typings/browser/ambient/jasmine/jasmine.d.ts" />

import {
    it,
    inject,
    describe,
    expect,
    beforeEach,
    beforeEachProviders
} from 'angular2/testing';

import { LoggerService } from './logger.service';

describe('AppComponent', () => {
    beforeEachProviders(() => [LoggerService]);

    beforeEach(() => {
      spyOn(console, 'log');
    });

    it('should log successfully', inject([LoggerService], (logger) => {
        let message = 'Message';
        logger.log(message);
        expect(console.log).toHaveBeenCalledWith(message);
    }));
});
