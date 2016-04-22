'use strict';

angular.module('questionary')
  .controller('QuestionaryShowCtrl', QuestionaryShowCtrl);
QuestionaryShowCtrl.$inject = ['QuestionService', 'questionary'];

function QuestionaryShowCtrl(QuestionService, questionary) {
  let vm = this;
  
  vm.answerSubmit = answerSubmit;
  vm.answer = answer;
  vm.answers = [];
  vm.questionary = questionary;

  function answer(answer_id, question_id) {
    let a = _.find(vm.questionAnswers, function(q) { return q.question_id === question_id; });
    if (a) {
      _.pull(vm.answers, a);
    }

    vm.answers.push(answer_id);
  }

  function answerSubmit() {
    vm.data = {};
    vm.data.answers = vm.answers;
    QuestionService.answerSubmit(vm.data);
    
  }
}
