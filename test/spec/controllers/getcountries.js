'use strict';

describe('Controller: GetcountriesCtrl', function () {

  // load the controller's module
  beforeEach(module('lifekeeApp'));

  var GetcountriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetcountriesCtrl = $controller('GetcountriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
