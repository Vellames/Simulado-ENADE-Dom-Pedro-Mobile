app.controller("resultListController", function($scope, $location, $sharedProperties){
    const userAnswers = $sharedProperties.getUserAnswers();
    const questions = $sharedProperties.getQuestions();

    $scope.summaryQuestionnaire = [];
    $scope.correctsAnswers = 0;

    // First for to iterate in all questions
    for(var i = 0; i < questions.length; i++){

        // Second for to iterate in all responses of question
        for(var x = 0; x < questions[i].responses.length; x++){

            // Check if actual response is correct
            if(questions[i].responses[x].correct){

                $scope.summaryQuestionnaire.push({
                    userAnswer : getLetter(userAnswers[i]),
                    correctAnswer : getLetter(x),
                    correct : (userAnswers[i] == x)
                });

                if(userAnswers[i] == x){
                    $scope.correctsAnswers++
                }

                break;
            }
        }
    }

    $scope.correctPercentage = ($scope.correctsAnswers / $scope.summaryQuestionnaire.length * 100).toFixed(2);

    $scope.backToBegin = function(){
        $location.path("/");
    }

});

var getLetter = function(index){
    return ['a', 'b', 'c', 'd' , 'e', 'f', 'g'][index];
};