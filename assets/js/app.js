'use strict';

/* App Module */

var profileApp = angular.module('profileApp', [
  'profileControllers',
  'profileServices',
  'profileDirectives'
]);

profileApp.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
