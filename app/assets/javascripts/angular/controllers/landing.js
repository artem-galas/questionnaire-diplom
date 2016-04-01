'use strict';

angular.module('questionary')
  .controller('LandingCtrl', LandingCtrl);
  LandingCtrl.$inject = ['$location', '$state', 'Auth'];

function LandingCtrl($location, $state, Auth) {
  var vm = this;

  vm.goToSignUp = goToSignUp;

  vm.user = Auth.currentUser().then(function(user){
    console.log (user);
    return user
  });

  function goToSignUp() {
    $state.go('sign_up');
  }
}