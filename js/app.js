var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "html/home.html",
            controller: 'homeCtrl',
        })
        .when("/product", {
            templateUrl: "html/product.html",
        })
        .when("/cart", {
            templateUrl: "html/cart.html",
            controller: 'cartCtrl',
        })
        .when("/feedback", {
            templateUrl: "html/feedback.html"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

app.controller('RatingController', ['$scope', function($scope) {
    $scope.ratingValue = 0;
    $scope.tempRating = 0;
    $scope.stars = [1, 2, 3, 4, 5];
    $scope.ratingCounts = {};

    $scope.setRating = function(rating) {
      $scope.tempRating = rating;
    };

    $scope.submitRating = function() {
      $scope.ratingValue = $scope.tempRating;
      $scope.updateRatingCounts($scope.tempRating);
    };

    $scope.updateRatingCounts = function(rating) {
      if (!$scope.ratingCounts[rating]) {
        $scope.ratingCounts[rating] = 1;
      } else {
        $scope.ratingCounts[rating]++;
      }
    };

    $scope.getRatingPercentage = function(rating) {
      var totalCount = Object.values($scope.ratingCounts).reduce((a, b) => a + b, 0);
      var count = $scope.ratingCounts[rating] || 0;
      return (count / totalCount) * 100;
    };
  }]);