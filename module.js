(function () {
  'use strict'
  var app = angular.module("testRoute", ["ngRoute", "ngMaterial"]);

  app.controller("testCtrl", testCtrl);
  function testCtrl($scope, $http) {
    debugger

    $scope.admin = false;
    $scope.password = { "value": "" };
    $scope.salesObject = {};
    $scope.receiveObject = {};
    $scope.returnObject = {};
    $scope.productObject = {};

    var d = new Date();
    $scope.productArray = [];
    $scope.productArrayDescription = [];
    var array = [];
    $scope.currentDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();



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
    $scope.insertSales = insertSales;
    function insertSales() {
      if ($scope.salesObject.productName && $scope.salesObject.memoNumber && $scope.salesObject.roll && $scope.salesObject.yard) {
        $http.post("./php/insertSales.php", {
          "productName": $scope.salesObject.productName,
          "memoNumber": $scope.salesObject.memoNumber,
          "roll": $scope.salesObject.roll,
          "yard": $scope.salesObject.yard,
          "date": $scope.currentDate
        })
          .then(function (success) {
            $scope.salesObject = {};
            alert("Data Inserted");
          });

      } else {
        alert("No Field Should Be Empty!!!");
      }


    }

    $scope.insertReceive = insertReceive;
    function insertReceive() {
      if ($scope.receiveObject.productName && $scope.receiveObject.sellerName && $scope.receiveObject.calanNumber && $scope.receiveObject.roll && $scope.receiveObject.yard) {
        $http.post("./php/insertReceive.php", {
          "productName": $scope.receiveObject.productName,
          "sellerName": $scope.receiveObject.sellerName,
          "calanNumber": $scope.receiveObject.calanNumber,
          "roll": $scope.receiveObject.roll,
          "yard": $scope.receiveObject.yard,
          "date": $scope.currentDate
        })
          .then(function (success) {
            $scope.receiveObject = {};
            alert("Data Inserted");
          });

      } else {
        alert("No Field Should Be Empty!!!");
      }


    }

    $scope.insertReturn = insertReturn;
    function insertReturn() {
      if ($scope.returnObject.productName && $scope.returnObject.memoNumber && $scope.returnObject.roll && $scope.returnObject.yard) {
        $http.post("./php/insertReturn.php", {
          "productName": $scope.returnObject.productName,
          "memoNumber": $scope.returnObject.memoNumber,
          "roll": $scope.returnObject.roll,
          "yard": $scope.returnObject.yard,
          "date": $scope.currentDate
        })
          .then(function (success) {
            $scope.returnObject = {};
            alert("Data Inserted");
          });

      } else {
        alert("No Field Should Be Empty!!!");
      }


    }

    $scope.insertProduct = insertProduct;
    function insertProduct() {
      if ($scope.productObject.productName && $scope.productObject.description) {
        $http.post("./php/insertProduct.php", {
          "productName": $scope.productObject.productName,
          "description": $scope.productObject.description
        })
          .then(function (success) {
            $scope.productArray.push($scope.productObject.productName);
            $scope.productArrayDescription.push({"productName": $scope.productObject.productName, "description": $scope.productObject.description});
            $scope.productObject = {};
            alert("Data Inserted");
          });

      } else {
        alert("No Field Should Be Empty!!!");
      }


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


    $scope.fetchProducts = fetchProducts;
    function fetchProducts() {
      $http.get("./php/selectProduct.php")
        .then(function (success) {
          success.data.forEach(element => {
            $scope.productArray.push(element.productName);
            $scope.productArrayDescription.push(element);
          });
        });
    }


    $scope.userLogin = userLogin;
    function userLogin() {
      debugger
      if ($scope.password.value == "incorrect") {
        fetchProducts();
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
