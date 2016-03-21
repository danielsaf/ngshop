(function () {
    'use strict';

    angular
        .module('shop')
        .factory('ProductsFactory', ProductsFactory);

    ProductsFactory.$inject = ['$http'];

    function ProductsFactory($http) {
        var self = this;
        self.products = [];
        self.getProducts = function () {
            $http.get('model/products.json', {cache:true})
                .then(function (response) {
                    console.log(response);
                    angular.copy(response.data, self.products);
                })
                .catch(function (error) {
                    console.log('Error', error);
                });

        };
        self.getProducts();
        return self;
    }
})();
