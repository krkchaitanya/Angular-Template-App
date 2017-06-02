var myApp=angular.module("myApp",["ngRoute"]).run(["$rootScope",function($rootScope){
    $rootScope.dev="chaiDev";
}]);



myApp.config(["$routeProvider",function($routeProvider){
    
    $routeProvider
    
    .when("/",{
        templateUrl:"main.html",
        controller:"mainController"
    })
    
    .when("/about",{
        templateUrl:"about.html",
        controller:"aboutController"
    })
    .when("/services",{
        templateUrl:"services.html",
        controller:"servicesController"
    })
        .when("/contacts",{
        templateUrl:"contact.html",
        controller:"contactController"
    })
       .when("/template",{
        templateUrl:"template.html",
        controller:"templateController"
    })
    
    .when("/template/:tempId",{
        templateUrl:"details.html",
        controller:"detailsController"
    })
    .otherwise({
        redirecttTo:"/"
    })
}]);

myApp.controller("mainController",["$scope",function($scope){
    
    
}]);


myApp.controller("aboutController",["$scope",function($scope){

    
}]);



myApp.controller("servicesController",["$scope","$http",function($scope,$http){
    
    $http.get("note.json").then(function(response){
        $scope.services=response.data;
    });
}]);


myApp.controller("contactController",["$scope","$http",function($scope,$http){
    $http.get("location.json").then(function(response){
        $scope.locations=response.data;
    })

}]);


myApp.controller("templateController",["$scope","$http",function($scope,$http){
    
    $http.get("temp.json").then(function(response){
       $scope.temps=response.data; 
        console.log(response.data);
    });
    
    
    
    $scope.tempopen=function(temp){
        
    }
    
}]);


myApp.controller("detailsController",["$scope","$http","$routeParams","$filter",function($scope,$http,$routeParams,$filter){
    
    $http.get("temp.json").then(function(response){

        var object_by_id = $filter('filter')(response.data, {id: $routeParams.tempId })[0];
        $scope.tempimage=object_by_id.image;
        $scope.idd=$routeParams.tempId;

    })
    

    
        
      
    
}]);