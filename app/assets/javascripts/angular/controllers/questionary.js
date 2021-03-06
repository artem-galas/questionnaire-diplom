'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['QuestionService', 'questionary', '$state'];

function QuestionaryCtrl(QuestionService, questionary, $state) {
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
    let submit_btn = angular.element('.submit-btn-form');
    submit_btn.button('loading');
    setTimeout(function () {
      questionService.sendFormQuestionary(data).then(function (response) {
        submit_btn.button('reset');
      });
    },1000);
  }
}
