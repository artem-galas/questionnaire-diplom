'use strict';

angular.module('questionary')
  .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['$location', '$state', 'Auth'];


function AuthCtrl($location, $state, Auth) {
  var vm = this;

  vm.signUp = signUp;
  vm.signIn = signIn;

  function signUp() {
    Auth.register(vm.user).then(function (registeredUser) {
      console.log(registeredUser);
    }, function (error) {
    });
  }

  function signIn(){
    Auth.login(vm.user).then(function(user) {
      console.log(user);
    }, function(error) {

    });
  }
}