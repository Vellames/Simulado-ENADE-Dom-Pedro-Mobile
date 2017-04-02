app.controller("homeController", function($scope, $location){

    $scope.newSimulated = function(){
        $location.path("/courses")
    }
});