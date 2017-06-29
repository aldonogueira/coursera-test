(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http'];
function SignUpController($http) {
  var signUpCtrl = this;

  signUpCtrl.firstname = null;
  signUpCtrl.lastname = null;
  signUpCtrl.email = null;
  signUpCtrl.phone = null;
  signUpCtrl.favoritedish = null;
  signUpCtrl.submitted = false;
  signUpCtrl.error = false;

  signUpCtrl.submit = function() {
    var url = 'https://aldo-coursera.herokuapp.com/menu_items/' + signUpCtrl.favoritedish + '.json';
    $http.get(url)
      .then(function(result) {
        signUpCtrl.submitted = true;
        signUpCtrl.error = false;
      }).catch(function(){
        signUpCtrl.submitted = false;
        signUpCtrl.error = true;
      });
  };
}

})();
