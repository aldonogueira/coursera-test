(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  this.categoryName = items.data.category.name;
  this.items = items.data.menu_items;
}

})();
