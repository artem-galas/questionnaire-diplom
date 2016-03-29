'use strict';

angular.module('questionary')
  .controller('LandingCtrl', LandingCtrl);
  LandingCtrl.$inject = ['$location', '$state'];

function LandingCtrl($location, $state) {
  var vm = this;

  vm.goToSignUp = goToSignUp;

  function goToSignUp() {
    $state.go('sign_up');
  }
}