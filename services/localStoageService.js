/**
 *localStorageService Service
 */

angular.module('fundooApp')
    .service('localStorageService', function() {

        //getting data from localStorageObject
        this.getData = function() {
            return JSON.parse(localStorage.getItem("EmployeeData"));
        }

        //setting data into localStorageObject
        this.setData = function(key, value1) {
            var localStorageObject = this.getData();
            localStorageObject[key] = value1;
            localStorage.setItem("EmployeeData", JSON.stringify(localStorageObject));
        }
    });
