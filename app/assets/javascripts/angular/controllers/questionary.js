'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['$location', '$state', 'QuestionService', 'questionary'];

function QuestionaryCtrl($location, $state, QuestionService, questionary) {
  let vm = this;
  let questionService = QuestionService;
  //vm.questionary = questionService.questionary;
  vm.questionary = questionary;

  vm.questions = vm.questionary.questions;
  vm.saveQuestionary = saveQuestionary;

  function saveQuestionary() {
    let data = vm.questionary;
    questionService.sendFormQuestionary(data);
  }
}
