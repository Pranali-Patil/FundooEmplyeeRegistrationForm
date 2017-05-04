/**
 *employeeForm controller
 */

angular.module('fundooApp')
    .controller('employeeFormController', function($scope, $state) {

        var empDataFormat;
        email = "admin@gmail.com";

        /* JSON object to store employee data */
        empDataFormat = {
            "engineer_data": {
                "name": {
                    "firstName" : "",
                    "middleName" : "",
                    "lastName" : ""
                },
                "phone": "",
                "emailAddress": ""
            },
            "bank_information": {
                "panNumber": "",
                "bankName": "",
                "accountNumber": "",
                "ifscCode": ""
            },
            "qualification_data": {
                "academic": {
                    "isDiploma": "",
                    "isDegree": "",
                    "qualification":"",
                    "discipline": "",
                    "yearOfPassing": "",
                    "agreegatePercentage": ""
                },
                "training" : {
                    "institute": "",
                    "duration": "",
                    "trainingIn": ""
                }
            },
            "contact_and_personal_data": {
                "dob": "",
                "employeeRelative": {
                    "name" : "",
                    "relationAs" : "",
                    "contact" : "",
                    "occupation" : "",
                    "relativeAnnualSalary" : ""
                },
                "address" : "",
                "permanentAddress" : ""
            }
        };

        //function performing on employee form button in form
        $scope.createObject = function() {
            $scope.Loading = true;

            /* storing empDataFormat into localstorage*/
            localStorage.setItem("EmployeeData", JSON.stringify(empDataFormat));
        };

        $(document).ready(function() {
            $(this).scrollTop(0);
            window.history.forward(-1)
        });
    });
