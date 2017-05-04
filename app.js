/**
 * FileName:app.js
 * CreatedBy: Dhiresh Bhoir
 * purpose : perform routing according to state
 */

/**
 * @define module
 * @param {string} ngApp - parameter refers to the HTML element in which app will run
 * @param {Array} injector - loading modules through injector
 */
angular.module('fundooApp', ['ui.router', 'ngFileUpload'])

    /** configure existing services */
    .config(function($stateProvider, $urlRouterProvider) {

        /**
         * @default home
         */
        $urlRouterProvider.otherwise('/employeeForm');

        /** @define states */
        $stateProvider

            /* configure employeeForm state */
            .state('employeeForm', {
                url: '/employeeForm',
                controller: 'employeeFormController',
                templateUrl: './templates/EmpolyeeForm.html'
            })

            /* configure engineerForm state */
            .state('engineerForm', {
                url: '/engineerForm',
                controller: 'engineerFormController',
                templateUrl: './templates/EngineerData.html'
            })

            /* configure bankInfoForm state */
            .state('bankInfoForm', {
                url: '/bankInfoForm',
                controller: 'bankInfoFormController',
                templateUrl: './templates/BankInformation.html'
            })

            /* configure qualificationData state */
            .state('qualificationData', {
                url: '/qualificationData',
                controller: 'qualificationDataController',
                templateUrl: './templates/QualificationDataForm.html'
            })

            /* configure contactAndPersonalData state */
            .state('contactAndPersonalData', {
                url: '/contactAndPersonalData',
                controller: 'contactAndPersonalDataController',
                templateUrl: './templates/ContactAndPersonalData.html'
            })

            /* configure successful state */
            .state('successful', {
                url: '/successful',
                controller: 'successController',
                templateUrl: './templates/Successful.html'
            });
    });
