(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

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

    service.giveBack = function(index) {
      var element = boughtList[index];
      boughtList.splice(index, 1);
      toBuyList.push(element);
    };

    service.getToBuyList = function() {
      return toBuyList;
    };

    service.getBoughtList = function() {
      return boughtList;
    };
  }
})();
