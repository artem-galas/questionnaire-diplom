'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['QuestionService', 'questionary'];

function QuestionaryCtrl(QuestionService, questionary) {
  let vm = this;
  let questionService = QuestionService;
  vm.questionary = questionary;

  vm.questions = vm.questionary.questions;
  vm.addQuestion = addQuestion;
  vm.saveQuestionary = saveQuestionary;

  function addQuestion() {
    questionService.addQuestion();
    setTimeout(function () {
      angular.element('question:last textarea.question-text').focus();
    })
  }

  function saveQuestionary() {
    let data = vm.questionary;
    console.log (data);
    questionService.sendFormQuestionary(data);
  }
}
