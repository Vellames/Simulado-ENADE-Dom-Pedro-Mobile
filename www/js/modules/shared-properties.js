app.service('$sharedProperties', function () {

    var questions = [];
    var userAnswers = [];

    return {
        getQuestions: function () {
            return questions;
        },
        setQuestions: function(value) {
            questions = value;
        },

        getUserAnswers: function(){
            return userAnswers;
        },
        setUserAnswers: function(value){
            userAnswers = value;
        }
    };
});