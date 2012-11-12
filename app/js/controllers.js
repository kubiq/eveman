'use strict';

/* Controllers */

function TransactionCtrl($scope) {
    //$scope.transactions = Transaction.query();
    $scope.transactions = [
        {"ownerID": 7657865765,
            "accountKey": 1000,
            "clientID": 3579,
            "clientName": "ClientName",
            "journalTransactionID":40,
            "price": 1000000,
            "quantity": 2,
            "stationID": 3333,
            "stationName": "JITA",
            "transactionDateTime": "2012.11.06 10:28",
            "transactionFor": "me",
            "transactionID": 42342342423,
            "transactionType": "sell",
            "typeID": 423423,
            "typeName": "Fenrir"},
        {"ownerID": 223423423,
            "accountKey": 1000,
            "clientID": 1171119,
            "clientName": "Judas II",
            "journalTransactionID": 20,
            "price": 3321,
            "quantity": 1,
            "stationID": 9087,
            "stationName": "Nennamaila",
            "transactionDateTime": "2012.11.06 10:27",
            "transactionFor": "oo",
            "transactionID": 756245,
            "transactionType": "buy",
            "typeID": 224442,
            "typeName": "Manticore"}
    ];
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId:$routeParams.phoneId}, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
