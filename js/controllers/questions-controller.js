app.controller("questionsController", function($scope, $http, $location ,$routeParams, $sharedProperties){

    var userAnswers = [];
    $scope.actualQuestion = 0;

    // Requisition to get the questions
    var url = $scope.baseUrl + $scope.urls.questions.get;
    url +=  "/" +  $routeParams.courseId + "/" + $routeParams.limit;
    $http.get (url).then(function(data){
        console.log(data);
        $scope.questions = data.data;
    }, function (data) {
        alert("Não foi possível realizar a requisição");
    });


    // Click answer function
    $scope.answerQuestion = function(isCorrect, index){
        userAnswers.push(index);
        if($scope.actualQuestion < $scope.questions.length - 1){
            $scope.actualQuestion++;
        } else {
            $sharedProperties.setQuestions($scope.questions);
            $sharedProperties.setUserAnswers(userAnswers);
            $location.path("/result-list");
        }
    }
});