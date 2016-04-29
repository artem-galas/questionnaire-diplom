'use strict';

angular.module('questionary')
  .controller('QuestionaryShowCtrl', QuestionaryShowCtrl);
QuestionaryShowCtrl.$inject = ['QuestionService', 'questionary', 'filterFilter'];

function QuestionaryShowCtrl(QuestionService, questionary, filterFilter) {
  let vm = this;
  
  vm.answerSubmit = answerSubmit;
  vm.answer = answer;
  vm.answers = [];
  vm.questionAnswers = [];
  vm.questionary = questionary;

  function answerSubmit() {
    vm.data = {};
    vm.data.answers = vm.answers;
    let answers = angular.element('[name=answeredForm]').serializeArray();
    _.each(answers, function (a) {
      vm.answers.push(a.value);
    });
    vm.data.answers = vm.answers;

    QuestionService.answerSubmit(vm.data).then(function (response) {
      vm.data = {};
      vm.answers = [];
      console.log (response);
    });
    
  }
}
