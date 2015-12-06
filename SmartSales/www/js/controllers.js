angular.module('starter.controllers', ['ngRoute'])

.controller('DashCtrl', function($scope, $location, productService) {
  $scope.getProducts = productService.getAllProducts;

  $scope.selectProduct = function(prod) {
    $location.path('/tab/products/'+prod.id);
    productService.selectProduct(prod);
  };
})
.controller('ProdCtrl', function($scope, productService) {
  $scope.getSelectedProduct = productService.getSelectedProduct;

  $scope.makeOrder = function(){
    alert("hi");
  };
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
