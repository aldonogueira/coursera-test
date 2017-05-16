(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.getToBuyList = ShoppingListCheckOffService.getToBuyList;
    this.buy = ShoppingListCheckOffService.buy;
    this.isEmpty = function() {
      return ShoppingListCheckOffService.getToBuyList().length == 0;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.getBoughtList = ShoppingListCheckOffService.getBoughtList;
    this.isEmpty = function() {
      return ShoppingListCheckOffService.getBoughtList().length == 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {name: "Cookie A", quantity: 10},
      {name: "Cookie B", quantity: 11},
      {name: "Cookie C", quantity: 12},
      {name: "Cookie D", quantity: 13},
      {name: "Cookie E", quantity: 14}
    ];
    var boughtList = [];

    service.buy = function(index) {
      var element = toBuyList[index];
      toBuyList.splice(index, 1);
      boughtList.push(element);
    };

    service.getToBuyList = function() {
      return toBuyList;
    };

    service.getBoughtList = function() {
      return boughtList;
    };
  }
})();
