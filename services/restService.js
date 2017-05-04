/**
 *restService Service
 */

angular.module("fundooApp")
    .service('restService', function($q, $http) {
        var baseUrl = "http://192.168.0.81:3030/";
        
        /** function to POST */
        this.postRequest = function(path, query) {
            var deferred = $q.defer();
            $http({
                    method: "POST",
                    url: baseUrl + path,
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity,
                    data: query
                }).then(function(data) {
                    deferred.resolve(data);
                }),
                function(msg, code) {
                    deferred.reject(msg);
                };
            return deferred.promise;
        };
    });
