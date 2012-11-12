'use strict';

/* Filters */

angular.module('transactionFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
