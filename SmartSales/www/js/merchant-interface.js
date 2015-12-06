var server = angular.module('server', [])

server.service('productService', ['$http', function($http){
  var selectedProduct = null;

  var productService = {};

  var allProducts = [];

  productService.selectProduct = function(product){
    selectedProduct = product;
  };

  productService.getSelectedProduct = function(){
    return selectedProduct;
  };

  productService.getAllProducts = function(){
    return allProducts;
  };

  productService.createOrder = function(product){

  };

  productService.refreshProducts = function(){
    url = 'http://web.manthanhd.com:3000/product/near/merchant/' + window.merchantId;
    method = 'GET';


    $http.get(url)
    .success(function(data, status, headers, config){
       allProducts = data;
    })
    .error(function(data, status, headers, config){
       console.log(data);
    });
    return selectedProduct;
  };

  return productService;
}]);

server.factory('merchantInterface', ['$http', function($http){

  merchantInterface = {};
  var timeoutLength = 10000;
  var baseUrl = 'http://web.manthanhd.com:3000/merchant/',
    url,
    method,
    params = {};
  var request = {
        method: method,
        url: url,
        timeout: timeoutLength,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
    };

  merchantInterface.register = function(merchantId, merchantToken){
    url = baseUrl + merchantId + '/register';
    method = 'POST';

    params = {
       'accessToken' : merchantToken, 
       'location': {'lat':51.5432698, 'lon':-0.0146661}
    };

    $http.post(url, params)
    .success(function(data, status, headers, config){
       console.log(data);
    })
    .error(function(data, status, headers, config){
       console.log(data);
    });
  };


   return merchantInterface;
}])