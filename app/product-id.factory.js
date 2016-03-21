(function () {
    'use strict';

    angular
        .module('shop')
        .factory('ProductIdFactory', ProductIdFactory);

    ProductIdFactory.$inject = ['$http'];

    function ProductIdFactory($http) {
        var self = this;
        self.product = [];
        self.getProduct = function () {
            $http.post('model/products.json')
                .then(function (response) {
                    self.products = response.data;
                    angular.copy(self.products, self.product);
                })
                .catch(function (error) {
                    console.log('Error', error);
                });
        };
        self.getProduct();
        return self;
    }
})();