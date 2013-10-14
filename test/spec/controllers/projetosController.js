'use strict';

describe('Controller: ProjetoscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('bpplannerUiApp'));

  var ProjetoscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjetoscontrollerCtrl = $controller('ProjetoscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
