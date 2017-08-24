var app = angular.module('GoogleMapsApp', ['addCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function ($routeProvider) {

        // Join Team Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

            // Find Teammates Control Panel
        }).when('/find', {
            templateUrl: 'partials/queryForm.html',

            // All else forward to the Join Team Control Panel
        }).otherwise({
            redirectTo: '/join'
        })
    });
