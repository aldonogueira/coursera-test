(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'CategoriesController as $ctrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/menuapp/templates/main-items.template.html',
    controller: 'ItemsController as $ctrl',
    resolve: {
      categoryName: 'A name ???',
      items: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getItemsForCategory(shortName);
      }]
    }
  });
}

})();
