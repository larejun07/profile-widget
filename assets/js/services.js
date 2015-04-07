'use strict';

/* Services */

var profileServices = angular.module('profileServices', ['ngResource']);

profileServices.factory('User', ['$resource',
  function($resource){
    return $resource('data/user.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
