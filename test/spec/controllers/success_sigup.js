'use strict';

describe('Controller: SuccessSigupCtrl', function () {

  // load the controller's module
  beforeEach(module('lifekeeApp'));

  var SuccessSigupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuccessSigupCtrl = $controller('SuccessSigupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
