/**
 *qualificationData Controller
 */

angular.module('fundooApp')
    .controller('qualificationDataController', function($scope, $state, localStorageService) {

        /*page scroll position to top at page load*/
        $(document).ready(function() {
            $(this).scrollTop(0);
        });

        var qualificationJsonObject;
        var QualificationDataObject;

        $scope.disciplineList = ["Computer", "IT", "Civil", "Electrical", "Electronic", "Mechanical"];

        var year = [];
        for (i = new Date().getFullYear(); i > 1990; i--) {
            year.push(i);
        }
        $scope.yearOptions = year;

        //function performing on next button in form
        $scope.next = function() {
            $scope.Loading = true;
            qualificationJsonObject = {
                "academic" : {
                    "isDiploma": $scope.diploma,
                    "isDegree": $scope.degree,
                    "discipline": $scope.selectedDiscipline,
                    "qualification": $scope.qualification,
                    "yearOfPassing": Number.parseInt($scope.yearOfPassing),
                    "agreegatePercentage": Number.parseInt($scope.aggregate)
                },
                "training" : {
                    "institute": $scope.trainingInstitute,
                    "duration": Number.parseInt($scope.trainingDuration),
                    "trainingIn": $scope.training
                }
            };

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("qualification_data", qualificationJsonObject);
        };

        /*calling getData from localStorageService to get data from localstorage*/
        QualificationDataObject = localStorageService.getData().qualification_data;
        var fieldArray = [['diploma', 'degree', 'selectedDiscipline', 'qualification' ,'yearOfPassing', 'aggregate'], ['trainingInstitute', 'trainingDuration', 'training']];
        var jsonKeyArray = [['isDiploma', 'isDegree', 'discipline', 'qualification', 'yearOfPassing', 'agreegatePercentage'], ['institute', 'duration', 'trainingIn']];
        var typeArray = ['academic','training'];
        for (var i = 0; i < fieldArray.length; i++) {
            for(var j=0; j < fieldArray[i].length;j++) {
                $scope[fieldArray[i][j]] = QualificationDataObject[typeArray[i]][jsonKeyArray[i][j]];
            }
        }

    });
