'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['$location', '$state'];

function QuestionaryCtrl($location, $state) {
  var vm = this;
  vm.questions = [{}];
  vm.addQuestion = addQuestion;

  function addQuestion() {
    console.log ('here');
    vm.questions.push({});
  }

  console.log('Hello');
}
