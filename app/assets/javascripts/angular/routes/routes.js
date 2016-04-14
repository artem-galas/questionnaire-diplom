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
          questionary: ['QuestionService','$stateParams', function(QuestionService, $stateParams){
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
  }]);
