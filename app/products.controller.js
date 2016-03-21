(function () {
    'use strict';

    angular
        .module('shop')
        .controller('ProductsCtrl', ProductsCtrl);

    ProductsCtrl.$inject = ['$scope', 'ProductsFactory','ProductIdFactory', '$routeParams'];

    function ProductsCtrl($scope, ProductsFactory, ProductIdFactory, $routeParams) {
        $scope.products = ProductsFactory.products;
        $scope.product = ProductIdFactory.product[$routeParams.id];
    }
})();
