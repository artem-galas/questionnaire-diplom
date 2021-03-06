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

  answerCtrl.$inject = ['QuestionService'];

  function answerCtrl (QuestionService) {
    let vm = this;
    let questionService = QuestionService;
    vm.removeAnswer = removeAnswer;
    vm.addAnswer = addAnswer;

    function removeAnswer(question,answer) {
      questionService.removeAnswer(question, answer);
    }

    function addAnswer(question) {
      questionService.addAnswer(question);
      setTimeout(function () {
        angular.element('answer:last .answer-text').focus();
      });
    }
  }
}
