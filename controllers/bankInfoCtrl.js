/**
 *bankInfoForm Controller
 */

angular.module('fundooApp')
    .controller('bankInfoFormController', function($scope, $state, localStorageService) {

        /*page scroll position to top at page load*/
        $(document).ready(function() {
            $(this).scrollTop(0);
        });

        var bankJsonObject;
        var bankInfoObject;

        //function performing on next button in form
        $scope.next = function() {
            $scope.Loading = true;
            bankJsonObject = {
                "panNumber": $scope.panNo,
                "bankName": $scope.bankName,
                "accountNumber": Number.parseInt($scope.accountNumber),
                "ifscCode": $scope.bankIfscCode
            };

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("bank_information", bankJsonObject)
        };

        /*calling getData from localStorageService to get data from localstorage*/
        bankInfoObject = localStorageService.getData().bank_information;

        var fieldArray = ['panNo', 'bankName', 'accountNumber', 'bankIfscCode'];
        var jsonKeyArray = ['panNumber', 'bankName', 'accountNumber', 'ifscCode'];
        for (var i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = bankInfoObject[jsonKeyArray[i]];
        }

    });
