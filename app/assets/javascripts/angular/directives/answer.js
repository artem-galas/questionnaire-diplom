'use strict';
angular.module('questionary')
  /** @desc directive for answers
   * @example <answers model='question.answers'></answer> */
  .directive('answers', answers);

function answers() {
  let directive = {
    link: link,
    scope: {
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

    vm.addAnswer = addAnswer;
    vm.removeAnswer = removeAnswer;

    function addAnswer(question) {
      questionService.addAnswer(question);
    }

    function removeAnswer(question,answer) {
      questionService.removeAnswer(question, answer);
    }
  }
}
