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

    vm.types = [{
      display_value: 'One select',
      type_question: 'one_select'
    },
    {
      display_value: 'Multi select',
      type_question: 'multi_select'
    }];

    vm.removeQuestion = removeQuestion;
    vm.addAnswer = addAnswer;
    
    function removeQuestion(question) {
      questionService.removeQuestion(question);
      vm.removed = true;
    }

    function addAnswer(question) {
      questionService.addAnswer(question);
    }
  }
}
