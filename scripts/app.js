 var coach = angular.module("coach",['ngRoute','coach-services','ui.router']);
 //console.log("main app.js")
// coach.config(function ($routeProvider) { //$rootScopeProvider, $sceProvider, $locationProvider, $controllerProvider) 
//     // $locationProvider.html5Mode({
//     //     enabled: true,
//     //     requireBase: false
//     //   });
//    // console.log("hfgh")
//     $routeProvider
//         .when("/",
//             {
//                 controller: 'HomeCtrl',
//                 templateUrl: "/src/homepage/Homepage.html"
//             }
//         )        
//         .when("/OhMyTennis/CoachLogin/",
//             {
//                 controller: 'CoachCtrl',
//                 templateUrl: "/src/coach/CoachLogin.html"
//             }
//         )
//         .when("/OhMyTennis/register/",
//             {
//                 controller: 'CoachCtrl',
//                 templateUrl: "/src/coach/CoachReg.html"
//             }
//         )
//         .when("/OhMyTennis/UserRegister/",
//             {
//                 controller: 'UserCtrl',
//                 templateUrl: "/src/user/UserReg.html"
//             }
//         )
//         .when("/OhMyTennis/UserLogin/",
//             {
//                 controller: 'UserCtrl',
//                 templateUrl: "/src/user/UserLogin.html"
//             }
//         )
//         .when("/OhMyTennis/UserDetailedRegisteration/",
//             {
//                 controller: 'UserCtrl',
//                 //templateUrl: "/src/user/UserReg.html"
//             }
//         )
//         .when("/OhMyTennis/OhMyCoaches/details",
//             {
//                 controller: 'OhMyCoachesCtrl',
//                 templateUrl: "/src/homepage/OhMyCoaches.html"
//             }
//         )
//         .when("/OhMyTennis/AdminPanel/", {
//             controller: 'AdminCtrl',
//             templateUrl: "/src/adminPanel/adminpanel.html"
//         })
//         .when("/OhMyTennis/coach_dashboard/", {
//             controller: 'CoachDBctrl',
//             templateUrl: "/src/coachDB/dashboard.html"
//         })


//         .when("/OhMyTennis/coach_dashboard/account", {
//             controller: 'CoachDBctrl',
//             templateUrl: "/src/coachDB/account.html"
//         })
//         .when("/OhMyTennis/searchcoach", {
//             controller: 'SearchCtrl',
//             templateUrl: "/src/homepage/Searchpage.html"
//         })
//         .otherwise({ redirectTo: "/" })

// })

coach.config(function($stateProvider, $urlRouterProvider) {

    // create default view 
    $urlRouterProvider.otherwise("/OhMyTennis"); 
    
    
    $stateProvider
    // home states and nested view
    .state('OhMyConseils', {
        url: "/OhMyTennis",
        views : {
            "" : {
                templateUrl:"/src/homepage/Homepage.html",
                controller: 'HomeCtrl'
            },
            "header" : {
                templateUrl:"src/homepage/header.html",
                controller:'HeaderCtrl'
            },
            "footer" : {
                templateUrl:"src/homepage/footer.html"
            }
        }
    })
    .state('OhMyCoaches', {
        url: "/OhMyCoaches",
        views : {
            "" : {
                templateUrl:"/src/homepage/Searchpage.html",
                controller: 'SearchCtrl'
            },
            "header" : {
                templateUrl:"src/homepage/header.html",
                controller:'HeaderCtrl'
            },
            "footer" : {
                templateUrl:"src/homepage/footer.html"
            }
        }
    })
    .state('coachlogin', {
        url: "/OhMyTennis/CoachLogin/",
        views : {
            "" : {
                templateUrl:"/src/coach/CoachLogin.html",
                controller: 'CoachCtrl'
            }
        }
    })
    .state('userlogin', {
        url: "/OhMyTennis/UserLogin/",
        views : {
            "" : {
                templateUrl:"/src/user/UserLogin.html",
                controller: 'UserCtrl'
            }
        }
    })
    .state('OhMyCoachebyId', {
        url: "/OhMyCoaches/details",
        views : {
            "" : {
                templateUrl:"/src/homepage/OhMyCoaches.html",
                controller: 'OhMyCoachesCtrl'
            },
            "header" : {
                templateUrl:"src/homepage/header.html",
                controller:'HeaderCtrl'
            },
            "footer" : {
                templateUrl:"src/homepage/footer.html"
            }
        }
    })
    .state('coachdashboard', {
        url: "/OhMyTennis/coach_dashboard/",
        views : {
            "" : {
                templateUrl: "/src/coachDB/dashboard.html",
                controller: 'CoachDBctrl'
            },
            "sidebar":{
                templateUrl: "/src/coachDB/sidebar/sidenavigation.html",
                controller: 'SideBarCtrl' 
            }
        }
    })
    .state('detailedregistercoach', {
        url: "/OhMyTennis/coach_dashboard/account",
        views : {
            "" : {
                templateUrl: "/src/coachDB/account/account.html",
                controller: 'AccountCtrl'
            },
            "sidebar":{
                templateUrl: "/src/coachDB/sidebar/sidenavigation.html",
                controller: 'SideBarCtrl' 
            }
        }
    })
    .state('adminpanel', {
        url: "/OhMyTennis/AdminPanel/",
        views : {
            "" : {
                templateUrl: "/src/adminPanel/adminpanel.html",
                controller: 'AdminCtrl'
            }
        }
    })
    .state('searchcoach', {
        url: "/OhMyTennis/searchcoach/",
        views : {
            "" : {
                templateUrl:"/src/homepage/Searchpage.html",
                controller: 'SearchCtrl'
            },
            "header" : {
                templateUrl:"src/homepage/header.html",
                controller:'HeaderCtrl'
            },
            "footer" : {
                templateUrl:"src/homepage/footer.html"
            }
        }
    })
    .state('individualcourse', {
        url: "/OhMyTennis/coach_dashboard/individualcourse",
        views : {
            "" : {
                templateUrl: "/src/coachDB/individual_courses/IndividualCourse.html",
                controller: 'IndividualCourseCtrl'
            },
            "sidebar":{
                templateUrl: "/src/coachDB/sidebar/sidenavigation.html",
                controller: 'SideBarCtrl' 
            }
        }
    })
    
    });