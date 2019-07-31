var coach = angular.module('coach');
coach .controller('AdminCtrl', function ($scope,$location,Coach) {
       // create a message to display in our view
     console.log("adminCtrlloaded");
$scope.coachList=[];

$scope.blockCoachObj={};
$scope.unBlockCoachObj={};
$scope.deleteCoachObj={};


$scope.userList=[];
$scope.verifyUserObj={};
     

      $scope.getCoach = function () {

            console.log('wayregistercoach');

            Coach.getCoachDetails($scope.signUpObj, function onSuccess(response) {
                  console.log(response);

                  $scope.coachList = response.coachlist;
                  console.log($scope.coachList);

            }, function onFailure() {
                  console.log(err)
            });
      }      

$scope.getCoach();


      $scope.blockCoach = function (Coach_ID) {

            console.log(Coach_ID);

            $scope.blockCoachObj.Coach_ID = Coach_ID;
            console.log('verify', $scope.blockCoachObj.Coach_ID);

            Coach.blockCoach($scope.blockCoachObj, function onSuccess(response) {
                  alert(response.msg);
                  $scope.getCoach();

            }, function onFailure() {
                  console.log(err)
            });

      }


      $scope.UnblockCoach = function (Coach_ID) {

            console.log('gt',Coach_ID);

            $scope.unBlockCoachObj.Coach_ID = Coach_ID;
            console.log('verify', $scope.unBlockCoachObj.Coach_ID);

            Coach.UnBlockCoach($scope.unBlockCoachObj, function onSuccess(response) {
                  alert(response.msg);
                  $scope.getCoach();

            }, function onFailure() {
                  console.log(err)
            });

      }

      $scope.deleteCoach = function (Coach_ID,Coach_Fname) {

            var r = confirm("You want to detele " + Coach_Fname);
            if (r == true) {

            console.log('gt', Coach_ID);

            $scope.deleteCoachObj.Coach_ID = Coach_ID;
            console.log('verify', $scope.deleteCoachObj.Coach_ID);

            Coach.deleteCoach($scope.deleteCoachObj, function onSuccess(response) {

                  alert(response.msg);
                  $scope.getCoach();

            }, function onFailure() {
                  console.log(err)
            });

            } else {

            }



      }



      $scope.getUser = function () {
            console.log('sds');
            Coach.getUserDetails($scope.signUpObj, function onSuccess(response) {
                  console.log(response);

                  $scope.userList = response.userlist;
                  console.log($scope.userList);

            }, function onFailure() {
                  console.log(err)
            });
      }  

$scope.getUser ();


      $scope.verifyUser = function (id) {

            $scope.verifyUserObj.id = id;
            console.log('verify', $scope.verifyUserObj.id);

            Coach.userVerification($scope.verifyUserObj, function onSuccess(response) {
                  $scope.getUser();

            }, function onFailure() {
                  console.log(err)
            });

      }

});