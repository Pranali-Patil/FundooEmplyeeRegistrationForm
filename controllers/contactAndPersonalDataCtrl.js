/**
 * contactAndPersonalData Controller
 */

angular.module('fundooApp')
    .controller('contactAndPersonalDataController', function($scope, $http, $state, localStorageService, restService) {

        var contactAndPersonalJsonObject;
        var contactAndPersonalDataObject;

        /*function for copying the address*/
        $scope.sameAsAbove = function() {
            if ($scope.hasChecked) {
                $scope.permanantAddress = $scope.currentAddress;
            } else {
                $scope.permanantAddress = "";
            }
        }

        /*jQuery for showing datepicker*/
        $('#sandbox-container input').datepicker({
            autoclose: true
        });

        /*function to submit employee data*/
        $scope.storeData = function(file) {
            $scope.Loading = true;
            contactAndPersonalJsonObject = {
                "dob": $scope.birthDate,
                "employeeRelative": {
                    "name" : $scope.Name,
                    "relationAs" : $scope.Relation,
                    "contact" : Number.parseInt($scope.MobileNumber),
                    "occupation" : $scope.Occupation,
                    "relativeAnnualSalary" : $scope.annualSalary
                },
                "current_address": $scope.currentAddress,
                "permanent_address": $scope.permanantAddress
            };

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("contact_and_personal_data", contactAndPersonalJsonObject);

            var fd = new FormData();
            fd.append("file", file);
            fd.append("engineer_data", JSON.stringify(localStorageService.getData()));

            /*calling postRequest from restService to store data on server*/
            restService.postRequest('createEngineerData', fd)
                .then(function(data, status, headers, config) {

                    /*Storing response in session storage*/
                    sessionStorage.setItem('successData', JSON.stringify(data.data));

                    /*Storing employee data from local storage*/
                    localStorage.removeItem("EmployeeData");
                    $state.go('successful');
                }, function(error) {
                    $scope.Loading = false;
                });
        };

        /*calling getData from localStorageService to get data from localstorage*/
        contactAndPersonalDataObject = localStorageService.getData().contact_and_personal_data;
        var fieldArray = [['birthDate', 'currentAddress', 'permanantAddress'],['Name', 'MobileNumber', 'Occupation', 'annualSalary']];
        var jsonKeyArray = ['dob', 'father_name', 'father_mobile_number', 'father_occupation', 'annual_salary', 'current_address', 'permanent_address'];
        for (var i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = contactAndPersonalDataObject[jsonKeyArray[i]];
        }

        $(document).ready(function() {
            function disableBack() {
                window.history.forward()
            }
            $(this).scrollTop(0);
            window.onload = disableBack();
            window.onpageshow = function(evt) {
                if (evt.persisted) disableBack()
            }
        });
    });
