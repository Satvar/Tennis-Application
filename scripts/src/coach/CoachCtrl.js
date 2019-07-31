
var coach = angular.module('coach')

//console.log("in coach cntrl")

coach.controller('CoachCtrl', function ($scope, Coach,$location) {
  
$scope.CoachConfig ={};




 
   $scope.coachlogin = function () {
     // console.log("in coach login")
      if ($scope.CoachConfig.Coach_Email == "" || $scope.CoachConfig.Coach_Email == undefined) {
         alert("Please enter user email")
         return;
      }


      if ($scope.CoachConfig.Coach_Password == "" || $scope.CoachConfig.Coach_Password == undefined) {
         alert("Please enter user password")
         return;
      }

      Coach.coachSignIn($scope.CoachConfig, function onSuccess(response) {
         console.log(response);
         if (response.errCode == 200) {
            sessionStorage.setItem('loginDetailObj', JSON.stringify(response.coachlist))
            $location.path("OhMyTennis/coach_dashboard/")
         }
         else {
           // console.log("in coach login")
            alert(response.msg)
         }
         $scope.CoachConfig = {};
      }, function onFailure() {
         console.log(err)
      });
   }

   // $scope.downloadresume = function () {
   //    var fileName = "qq.pdf";
   //    var a = document.createElement("a");
   //    document.body.appendChild(a);
   //    Coach.downloadresume(function onSuccess(response) {

   //       console.log("response", response)
   //       $scope.details = response;
   //       var file = new Blob([response.data], { type: 'application/pdf' });
   //       var fileURL = window.URL.createObjectURL(file);
   //       a.href = fileURL;
   //       a.download = fileName;
   //       a.click();
   //    }, function onFailure() {
   //      // console.log("gf", err)
   //    });
   // }

   function getParameter( name, url ) {
      if (!url) url = location.href;
      name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regexS = "[\\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( url );
      return results == null ? null : results[1];
   }
   //console.log(gup('emailVerificationFlag', window.location.href));
   
   
      $scope.getIfConfirmEmail = function () {
   
         if(getParameter('emailVerificationFlag', window.location.href)=='1')
         {
            alert("Thanks for verifying your email address")
         }
      }
      function getParameter( name, url ) {
   if (!url) url = location.href;
   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
   var regexS = "[\\?&]"+name+"=([^&#]*)";
   var regex = new RegExp( regexS );
   var results = regex.exec( url );
   return results == null ? null : results[1];
}
//console.log(gup('emailVerificationFlag', window.location.href));


   $scope.getIfConfirmEmail = function () {

      if(getParameter('emailVerificationFlag', window.location.href)=='1')
      {
         alert("Thanks for verifying your email address")
      }
   }
   $scope.getIfConfirmEmail();
});