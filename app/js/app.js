'use strict';

/* App Module */

angular.module('eveman', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/transactions', {templateUrl: 'partials/transactions.html',   controller: TransactionCtrl}).
      otherwise({redirectTo: '/transactions'});
}]);
