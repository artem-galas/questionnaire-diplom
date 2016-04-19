'use strict';
angular.module('questionary')
  /** @desc directive for answers
   * @example <answers model='question.answers'></answer> */
  .directive('answer', answer);

function answer() {
  let directive = {
    link: link,
    scope: {
      answer: '=',
      question: '='
    },
    templateUrl: 'directives/answers.html',
    restrict: 'E',
    controller: answerCtrl,
    controllerAs: 'vm'
  };
  return directive;

  function link(scope, element, attr) {

  }

  answerCtrl.$inject = ['$scope', 'QuestionService'];

  function answerCtrl ($scope, QuestionService) {
    let vm = this;
    let questionService = QuestionService;
    vm.removeAnswer = removeAnswer;

    function removeAnswer(question,answer) {
      questionService.removeAnswer(question, answer);
    }
  }
}
