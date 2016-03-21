(function () {
    'use strict';

    var app = angular.module('shop', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/products', {
            controller: 'ProductsCtrl',
            templateUrl: 'partials/products.html'
        });

        $routeProvider.when('/product/:id', {
            controller: 'ProductsCtrl',
            templateUrl: 'partials/product.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });

    }]);

})();