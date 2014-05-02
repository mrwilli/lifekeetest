'use strict';

describe('Service: Authsrvc', function () {

  // load the service's module
  beforeEach(module('lifekeeApp'));

  // instantiate service
  var Authsrvc;
  beforeEach(inject(function (_Authsrvc_) {
    Authsrvc = _Authsrvc_;
  }));

  it('should do something', function () {
    expect(!!Authsrvc).toBe(true);
  });

});
