var coach = angular.module('coach')

    coach.controller('HeaderCtrl', function ($scope ,$location,Coach,$routeParams) {
//console.log("heafer")

$scope.UserConfig = {};
$scope.signUpObj = {};
$scope.quickRegisterUser = function () {
    if ($scope.UserConfig.User_Email == "" || $scope.UserConfig.User_Email == undefined) {
        alert("Please enter valid email")
        return;
    }
    if ($scope.UserConfig.User_FirstName == "" || $scope.UserConfig.User_FirstName == undefined) {
        alert("Please enter first name")
        return;
    }
    if ($scope.UserConfig.User_Name == "" || $scope.UserConfig.User_Name == undefined) {
        alert("Please enter name")
        return;
    }
    if ($scope.UserConfig.User_Phone == "" || $scope.UserConfig.User_Phone == undefined) {
        alert("Please enter Phone")
        return;
    }
    if ($scope.UserConfig.User_Password == "" || $scope.UserConfig.User_Password == undefined) {
        alert("Please enter password")
        return;
    }
    Coach.quickInsertUser($scope.UserConfig, function onSuccess(response) {
        console.log("response", response)
        $scope.closeUserModal();
        $scope.details = response;
    }, function onFailure() {
        console.log(err)
    });
}

$scope.closeUserModal  = function(){
    $scope.UserConfig = {};
    $('#UserModal').modal('hide'); 
    $('body').removeClass('modal-open'); 
    $('.modal-backdrop').remove();
   // angular.element('#UserModal').modal('hide');
}
 
$scope.goToUserLogin = function () {
    $('#LoginModal').modal('hide'); 
    $('body').removeClass('modal-open'); 
    $('.modal-backdrop').remove();
     $location.url("/OhMyTennis/UserLogin/")

   
}

$scope.goToCoachLogin = function(){
    $('#LoginModal').modal('hide'); 
    $('body').removeClass('modal-open'); 
    $('.modal-backdrop').remove();
     $location.url("/OhMyTennis/CoachLogin/")

}  
$scope.gotoRegisterCoach = function () {

    if ($scope.signUpObj.Coach_Email == "" || $scope.signUpObj.Coach_Email == undefined) {
        alert("Please enter valid email")
        return;
        }
        if ($scope.signUpObj.Coach_Fname == "" || $scope.signUpObj.Coach_Fname == undefined) {
        alert("Please enter firstname")
        return;
        }
        if ($scope.signUpObj.Coach_Lname == "" || $scope.signUpObj.Coach_Lname == undefined) {
        alert("Please enter lastname")
        return;
        }
        if ($scope.signUpObj.Coach_Phone == "" || $scope.signUpObj.Coach_Phone == undefined) {
        alert("Please enter phonenumber")
        return;
        }
        if ($scope.signUpObj.Coach_Password == "" || $scope.signUpObj.Coach_Password == undefined) {
        alert("Please enter password")
        return;
        }
        if ($scope.signUpObj.Coach_City == "" || $scope.signUpObj.Coach_City == undefined) {
        alert("Please enter city")
        return;
        }

    console.log($scope.signUpObj)

    Coach.quickInsertCoach($scope.signUpObj, function onSuccess(response) {
       console.log("in register")
        $scope.signUpObj = {};
        alert(response.message);
        if(response.errCode != 505){
            $('#coachModal').modal('hide'); 
            $('body').removeClass('modal-open'); 
            $('.modal-backdrop').remove();
        }
        
        //angular.element('#coachModal').modal('hide');

    }, function onFailure() {
        console.log(err)
    });
} 

$scope.goToAdminPanel = function () {

    $location.path("OhMyTennis/AdminPanel/")
}

$scope.gotoohmycoaches = function () {
console.log("ffg")
sessionStorage.clear();
   // $location.path("/OhMyCoaches/")
   $('#concept').removeClass('active')
   $('#coaches').addClass('active')
}

    })