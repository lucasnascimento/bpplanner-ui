'use strict';

describe('Service: projetosService', function () {

  // load the service's module
  beforeEach(module('bpplannerUiApp'));

  // instantiate service
  var projetosService;
  beforeEach(inject(function (_projetosService_) {
    projetosService = _projetosService_;
  }));

  it('should do something', function () {
    expect(!!projetosService).toBe(true);
  });

});
