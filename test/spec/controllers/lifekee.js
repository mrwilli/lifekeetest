'use strict';

describe('Controller: LifekeectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('lifekeeApp'));

  var LifekeectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LifekeectrlCtrl = $controller('LifekeectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
