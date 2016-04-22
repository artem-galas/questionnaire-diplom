'use strict';

angular.module('questionary')
  .controller('QuestionatyStatisticCtrl', QuestionatyStatisticCtrl);
QuestionatyStatisticCtrl.$inject = ['questionary'];

function QuestionatyStatisticCtrl(questionary) {
  let vm = this;

  vm.questionary = questionary;

}
