(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.color = "";
    $scope.borderStyle = "";

    // evaluate if user has too many items in their lunch
    $scope.checkLunch = function () {
      var numItems = countItems();
      $scope.borderStyle = "solid";

      // first check if they input anything!
      if (numItems == 0) {
        $scope.message = "Please enter data first";
        $scope.color = "red";
      }
      // 3 or less items is a good lunch!
      else if (numItems <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = "green";
      }
      // more than 3 items is too many for lunch!
      else {
        $scope.message = "Too much!"
        $scope.color = "green";
      }
    };

    // function to count the number of items in lunch
    // note: does not include empty items towards the count of items
    function countItems() {
      // initialize counter and build list of lunch items
      var counter = 0;
      var lunchList = $scope.lunch.split(',');

      // loop through lunch items
      for (var i=0; i<lunchList.length; i++) {
        // if it's not empty, add item to count of valid lunch items
        if (lunchList[i].trim() != "") {
          counter ++;
        }
      }

      // return count of lunch items
      return counter;
    }
  }
})();
