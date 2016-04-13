'use strict';
angular.module('questionary')
  /** @desc directive for answers
   * @example <question model='question.answers'></question> */
  .directive('question', question);

function question() {
  let directive = {
    link: link,
    scope: {
      questions: '='
    },
    templateUrl: 'directives/question.html',
    restrict: 'E',
    controller: questionCtrl,
    controllerAs: 'vm'
  };
  return directive;

  function link(scope, element, attr) {

  }

  questionCtrl.$inject = ['$scope', 'QuestionService'];

  function questionCtrl($scope, QuestionService) {
    let vm = this;
    let questionService = QuestionService;

    vm.removeQuestion = removeQuestion;
    vm.addQuestion = addQuestion;

    function addQuestion() {
      questionService.addQuestion();
    }

    function removeQuestion(question) {
      questionService.removeQuestion(question)
    }
  }
}