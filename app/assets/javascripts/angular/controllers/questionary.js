'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['QuestionService', 'questionary'];

function QuestionaryCtrl(QuestionService, questionary) {
  let vm = this;
  let questionService = QuestionService;
  vm.questionary = questionary;

  vm.questions = vm.questionary.questions;
  vm.saveQuestionary = saveQuestionary;

  function saveQuestionary() {
    let data = vm.questionary;
    questionService.sendFormQuestionary(data);
  }
}
