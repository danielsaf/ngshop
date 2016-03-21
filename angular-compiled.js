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
