'use strict';

describe('Service: Getcountries', function () {

  // load the service's module
  beforeEach(module('lifekeeApp'));

  // instantiate service
  var Getcountries;
  beforeEach(inject(function (_Getcountries_) {
    Getcountries = _Getcountries_;
  }));

  it('should do something', function () {
    expect(!!Getcountries).toBe(true);
  });

});
