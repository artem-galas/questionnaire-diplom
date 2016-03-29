'use strict';

angular.module('questionary')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdIconProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $mdIconProvider){

    $mdIconProvider.defaultIconSet('/mdi.svg');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'vm'
      })
      .state('sign_up', {
        url: '/sign_up',
        templateUrl: 'sign_up.html',
        controller: 'AuthCtrl',
        controllerAs: 'vm'
      })
      .state('sign_in', {
        url: '/sign_in',
        templateUrl: 'sign_in.html',
        controller: 'AuthCtrl',
        controllerAs: 'vm'
      })
  }]);
