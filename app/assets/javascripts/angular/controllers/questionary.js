'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['$location', '$state', 'QuestionService', '$scope'];

function QuestionaryCtrl($location, $state, QuestionService, $scope) {
  let vm = this;
  let questionService = QuestionService;
  vm.questions = questionService.question;
  vm.saveQuestionary = saveQuestionary;

  function saveQuestionary() {
    //let data = angular.toJson(vm.questions);
    let data = vm.questions;
    console.log (angular.toJson($scope.questionaryNew));
    questionService.sendFormQuestionary(data);
  }
}
