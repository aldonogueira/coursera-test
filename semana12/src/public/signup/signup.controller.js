(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = [];
function SignUpController() {
  var signUpCtrl = this;

  signUpCtrl.firstname = null;
  signUpCtrl.lastname = null;
  signUpCtrl.email = null;
  signUpCtrl.phone = null;
  signUpCtrl.favoritedish = null;

  signUpCtrl.submit = function() {
    console.log('firstname = ' + signUpCtrl.firstname)
  };
}

})();
