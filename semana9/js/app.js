(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        found: '<foundItems'
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;

    controller.searchTerm = '';
    controller.found = [];

    controller.narrowList = function() {
      var listPromise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      listPromise.then(function(list) {
        controller.found = list;
      });
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function(response) {
        var items = response.data.menu_items;
        return items.filter(function(e) {
           return e.description.toLowerCase()
             .search(searchTerm.toLowerCase()) != -1;
         });
      }).catch(function(error) {
        console.log('Erro ' + error.message);
      });
    }

  }

})();
