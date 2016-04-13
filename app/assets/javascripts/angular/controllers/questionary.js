'use strict';

angular.module('questionary')
  .controller('QuestionaryCtrl', QuestionaryCtrl);
QuestionaryCtrl.$inject = ['$location', '$state', 'QuestionService'];

function QuestionaryCtrl($location, $state, QuestionService) {
  let vm = this;
  let questionService = QuestionService;
  vm.questions = questionService.question;
}
