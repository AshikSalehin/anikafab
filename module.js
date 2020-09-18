(function () {
  'use strict'
  var app = angular.module("testRoute", ["ngRoute", "ngMaterial"]);

  app.controller("testCtrl", testCtrl);
  function testCtrl($scope, $mdDialog, $http) {
    $scope.admin = false;
    $scope.password = { "value": "" };

    var d = new Date();
    var array = [];
    $scope.currentDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

    debugger

    $scope.details = [{
      "productName": "Product1",
      "roll": "10",
      "yard": "1000",
      "price": "560/-",
      "brand": "12345"
    },
    {
      "productName": "Product2",
      "roll": "10",
      "yard": "1000",
      "price": "560/-",
      "brand": "12345"


    },
    {
      "productName": "Product3",
      "roll": "10",
      "yard": "1000",
      "price": "560/-",
      "brand": "12345"
    }];
    $scope.test = "New"
    $scope.insertData = insertData;
    function insertData() {
      $http.post("insert.php", { "test": $scope.test })
        .then(function (success) {
          console.log("data  :" + success.data);
          displayData();
        });


    }

    $scope.displayData = displayData;
    function displayData() {
      $http.get("./php/select.php")
        .then(function (success) {
          success.data.forEach(element => {
            array.push(element.test);
          });

          console.log("data  :" + array);
          array = [];
        });
    }
    $scope.userLogin = userLogin;
    function userLogin() {
      debugger
      if ($scope.password.value == $scope.currentDate) {
        $scope.admin = true;
      }
      else {
        alert("Incorrect Password");
      }
    }


  }



  app.config(function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: 'home.html'
      })
      .when("/sales", {
        templateUrl: 'sales.html'
      })
      .when("/receive", {
        templateUrl: 'receive.html'
      })
      .when("/return", {
        templateUrl: 'return.html'
      })
      .when("/products", {
        templateUrl: 'products.html'
      })
  });
  app.config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  });




})();
