(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'menuapp/templates/categories.template.html',
  controller: CategoriesComponentController
});

CategoriesComponentController.$inject = ['MenuDataService'];
function CategoriesComponentController(MenuDataService) {
  var $ctrl = this;

  $ctrl.categoriesList = [];

  MenuDataService.getAllCategories()
    .then(function(data) {
      $ctrl.categoriesList = data;
    });
}

})();
