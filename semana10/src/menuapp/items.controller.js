(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  console.log(items);
  this.categoryName = 'categoryName';
  this.items = items.data;
}

})();
