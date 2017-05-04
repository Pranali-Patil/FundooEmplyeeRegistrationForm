/**
 *engineerForm Controller
 */

angular.module('fundooApp')
    .controller('engineerFormController', function($scope, $state, localStorageService) {

        /*page scroll position to top at page load*/
        $(document).ready(function() {
            $(this).scrollTop(0);
        });

        var engineerJsonObject;
        var engineerDataObject;

        $scope.cityList = ["Mumbai", "Banglore", "Pune", "Hyaderabad", "Chennai"];

        //function performing on next button in form
        $scope.next = function() {
            var fullName = $scope.name.split(" ");
            $scope.Loading = true;
            engineerJsonObject = {
                "name": {
                    "firstName" : fullName[0]+' ',
                    "middleName" : fullName[1]+' ',
                    "lastName" : fullName[2]
                },
                "phone" : $scope.mobileNumber,
                "emailAddress" : $scope.emailId
            };

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("engineer_data", engineerJsonObject);
        };

        /*calling getData from localStorageService to get data from localstorage*/
        engineerDataObject = localStorageService.getData().engineer_data;
        $scope.name = engineerDataObject.name.firstName+engineerDataObject.name.middleName+engineerDataObject.name.lastName;
        $scope.mobileNumber = engineerDataObject.phone;
        $scope.emailId = engineerDataObject.emailAddress;
    });
