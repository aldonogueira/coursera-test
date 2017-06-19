(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController(MenuDataService) {
  var $ctrl = this;

  $ctrl.categoriesList = [];
  $ctrl.itemsList = [];

  MenuDataService.getAllCategories()
    .then(function(data) {
      $ctrl.categoriesList = data;
    });

  MenuDataService.getItemsForCategory(categoryShortName)
    .then(function(data) {
      $ctrl.itemsList = data;
    });
}

})();
