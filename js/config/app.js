app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'homeController',
            templateUrl : 'views/home.html'
        })
        .when("/courses", {
            controller : "coursesController",
            templateUrl: "views/courses.html"
        })
        .when("/questions/:courseId/:limit", {
            controller: "questionsController",
            templateUrl: "views/questions.html"
        })
        .when("/result-list", {
            controller: "resultListController",
            templateUrl: "views/result-list.html"
        })
        .otherwise({
            redirectTo:'/'
        });
}]);

app.run(['$rootScope',function($rootScope){
    $rootScope.baseUrl = "http://localhost:3000/api";

    $rootScope.urls = {
        courses : {
            get : "/courses"
        },
        questions: {
            get : "/questions"
        }
    }
}]);