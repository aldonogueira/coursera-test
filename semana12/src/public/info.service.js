(function () {
'use strict';

angular.module('public')
.service('InfoService', InfoService);

InfoService.$inject = [];
function InfoService() {
  var service = this;

  service.userdata = null;

  service.save = function(userdata) {
    service.userdata = userdata;
  };
}

})();
