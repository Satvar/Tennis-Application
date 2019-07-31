
console.log("in side")
var coach = angular.module('coach')
coach.controller('SideBarCtrl', function ($scope, $location, Coach) {

    $scope.goToDashboard = function () {
        console.log('fd');

        $location.path("OhMyTennis/coach_dashboard/")
    }

    $scope.goToAccount = function () {
        $location.path("/OhMyTennis/coach_dashboard/account")
    }

    $scope.goToIndividualcourse = function () {
        $location.path("/OhMyTennis/coach_dashboard/individualcourse")
    }

})