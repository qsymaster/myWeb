var myApp = angular.module('myApp',[]);
myApp.controller('indexController',['$scope',function($scope){


    $scope.loginIn=function(){
        window.location.href='pages/common/main.html';
    }

}]);
