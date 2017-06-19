(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'menuapp/templates/items.template.html',
  controller: ItemsComponentController
});

ItemsComponentController.$inject = ['MenuDataService'];
function ItemsComponentController(MenuDataService) {
  var $ctrl = this;

  $ctrl.itemsList = [];

  MenuDataService.getItemsForCategory(categoryShortName)
    .then(function(data) {
      $ctrl.itemsList = data;
    });
}

})();
