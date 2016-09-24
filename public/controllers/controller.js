var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

// Detta är ett get request till urlen /contacts och serverns kommer 
// skicka tillbaka ett response
/*$http.get('/contacts').success(function(response){
	console.log("i got the data");
	$scope.contacts = response;
});*/


$scope.initiateApp = function(){
    console.log('inne i initation')
    $http.get('/authorize').success(function(response){
        
    });
};


    /*//var janne = "heeeej";
    $scope.janne = "yaaaaaaaaaaay!!!!!";
    */
 	
 	/*
    person1 = {
    	name: 'fille',
    	email: 'fille@email.com',
    	number: '123456'
    };
    person2 = {
    	name: 'tobbe',
    	email: 'tobbe@email.com',
    	number: '456789'
    };
    person3 = {
    	name: 'vigge',
    	email: 'vigge@email.com',
    	number: '000011'
    };

    var contacts = [person1, person2, person3];

    $scope.contacts = contacts;
     */
    
}]).config(function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl: 'views/hem.client.html'
        })
            
    });