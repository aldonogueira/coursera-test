(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService'];
function MyInfoController(InfoService) {
  var myInfoCtrl = this;
  myInfoCtrl.userdata = null;

  myInfoCtrl.$onInit = function() {
    myInfoCtrl.userdata = InfoService.userdata;
  };
}

})();
