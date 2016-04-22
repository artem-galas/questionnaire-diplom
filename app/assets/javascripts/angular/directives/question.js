'use strict';
angular.module('questionary')
  /** @desc directive for answers
   * @example <question model='question.answers'></question> */
  .directive('question', question);

function question() {
  let directive = {
    link: link,
    scope: {
      question: '=',
      index: '@'
    },
    templateUrl: 'directives/question.html',
    restrict: 'E',
    controller: questionCtrl,
    controllerAs: 'vm'
  };
  return directive;

  function link(scope, element, attr) {

  }

  questionCtrl.$inject = ['QuestionService'];

  function questionCtrl(QuestionService) {
    let vm = this;
    let questionService = QuestionService;

    vm.addQuestion = addQuestion;
    vm.removeQuestion = removeQuestion;
    vm.addAnswer = addAnswer;

    function addQuestion() {
      questionService.addQuestion();
    }

    function removeQuestion(question) {
      questionService.removeQuestion(question);
      vm.removed = true;
    }

    function addAnswer(question) {
      questionService.addAnswer(question);
    }
  }
}
