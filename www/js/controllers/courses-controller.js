app.controller("coursesController", function($scope, $http, $location){

    $http.get ($scope.baseUrl + $scope.urls.courses.get).then(function(data){
        $scope.courses = data.data;
    }, function (data) {
        alert("Não foi possível realizar a requisição");
    });

    $scope.loadQuestions = function(courseId){
        $location.path("questions/" + courseId + "/30");
    }
});