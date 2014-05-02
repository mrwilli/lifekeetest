'use strict';

describe('Controller: SuccessSignupCtrl', function () {

  // load the controller's module
  beforeEach(module('lifekeeApp'));

  var SuccessSignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuccessSignupCtrl = $controller('SuccessSignupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
