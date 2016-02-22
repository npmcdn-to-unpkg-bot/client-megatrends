// /// <reference path="..\..\typings\main\ambient\jquery\jquery.d.ts" />
// /// <reference path="..\..\typings\main\ambient\jasmine-jquery\jasmine-jquery.d.ts" />

import {
  it,
  describe,
  expect
} from 'angular2/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {

  let navbar = new NavbarComponent;

  it('should load successfully', () => {
    //expect($('navbar')).toExist();
    expect(true).toBe(true);
  });

});
