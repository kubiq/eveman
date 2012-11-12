'use strict';

/* Services */

angular.module('transactionServices', ['ngResource']).
    factory('Transaction', function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query:{method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    });
