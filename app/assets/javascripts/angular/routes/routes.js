'use strict';

angular.module('questionary')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    //$urlRouterProvider.otherwise('/');
    $stateProvider
      .state('questionaryNew', {
        url: '/users/questionaries/new',
        templateUrl: 'questionaryNew.html',
        controller: 'QuestionaryCtrl',
        controllerAs: 'vm',
        resolve: {
          questionary: ['QuestionService','$stateParams', function(QuestionService){
            return  QuestionService.questionary;
          }]
        }
      })
      .state('questionaryEdit', {
        url: '/users/questionaries/:id/edit',
        templateUrl: 'questionaryEdit.html',
        controller: 'QuestionaryCtrl',
        controllerAs: 'vm',
        resolve: {
          questionary: ['QuestionService','$stateParams', function(QuestionService, $stateParams){
            return  QuestionService.getQuestionary($stateParams.id);
          }]
        }
      })
      .state('questionaryShow', {
        url: '/questionaries/:id',
        templateUrl: 'questionaryShow.html',
        controller: 'QuestionaryShowCtrl',
        controllerAs: 'vm',
        resolve: {
          questionary: ['QuestionService', '$stateParams', function (QuestionService, $stateParams) {
            return QuestionService.getQuestionaryShow($stateParams.id);
          }]
        }
      })
      .state('questionaryStatistic', {
        url: '/users/questionaries/:id/statistic',
        templateUrl: 'questionaryStatistic.html',
        controller: 'QuestionatyStatisticCtrl',
        controllerAs: 'vm',
        resolve: {
          questionary: ['QuestionService', '$stateParams', function (QuestionService, $stateParams) {
            return QuestionService.getQuestionaryShow($stateParams.id);
          }]
        }
      })
  }]);
