var coach = angular.module('coach')
coach.controller('SearchCtrl', function ($scope, $location, Coach, $routeParams) {
    $scope.coachdetails =[];
    $scope.getseaarchobj = {};
    $('#concept').removeClass('active')
    $('#coaches').addClass('active')

    $scope.searchcoach = function () {
        if(sessionStorage.SearchObj !=undefined){
            console.log("sessionStorage.SearchObj",sessionStorage.SearchObj)
            $scope.getseaarchobj = JSON.parse(sessionStorage.SearchObj);
            console.log("$scope.getseaarchobj",$scope.getseaarchobj)
            Coach.search_for_coach($scope.getseaarchobj, function onSuccess(response) {
                $scope.coachdetails = response.coachlist;
                console.log("$scope.coachdetails", $scope.coachdetails)
            }, function onFailure() {
                console.log(err)
            });
        }
        else{
            Coach.getallcoaches(function onSuccess(response) {
                $scope.coachdetails = response.data;
                console.log("response",$scope.coachdetails)
            }, function onFailure() {
               console.log(err)
            });
        }

    }

    $scope.searchcoach();

        // ====search function ===============

        $scope.SearchObj = {};
        $scope.searchcoach1 = function () {
            console.log("in search ")
            sessionStorage.setItem('SearchObj', JSON.stringify($scope.SearchObj));
           $scope.searchcoach();
        }
        $scope.cities =[];
        $scope.getcities = function(){
            Coach.getallcoaches(function onSuccess(response) {
                $scope.coachcities = response.data;
                console.log("responsecities",response.data)
                for(var i =0; i<$scope.coachcities.length; i++){
                  $scope.cities.push($scope.coachcities[i].Coach_City)
                }
                console.log("$scope.cities",$scope.cities)
            }, function onFailure() {
               console.log(err)
            });
        }

        $scope.getcities();
        $scope.searchcityobj={};
        $scope.searchcoachlist = [];
        $scope.searchcoachfrompage = function(){
           console.log("from dropdown",$scope.searchcityobj.ville)
            if ($scope.searchcityobj.ville != "" && $scope.searchcityobj.ville != undefined) {
                Coach.searchindetailforcoach($scope.searchcityobj, function onSuccess(response) {
                    $scope.coachdetails = response.coachlist;
                    console.log("$scope.coachdetails", $scope.coachdetails)
                }, function onFailure() {
                    console.log(err)
                });
            }
            else{
                alert("please choose a city")
            }
        }
})