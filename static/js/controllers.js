var Knightspider = angular.module('phonecatControllers', []);

Knightspider.controller('PhoneListCtrl', ['$scope', '$http','$sce',
    function ($scope, $http, $sce) {
        $http.get('http://idp-api.herokuapp.com/blog').success(function(data) {
            $scope.posts = data;
        }).
        error(function() {
            $scope.error = true;
        });
        $scope.toTrustedHTML = function( html ){
            return $sce.trustAsHtml( html );
        }
        $scope.orderProp = 'titel';
    }]);




Knightspider.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams','$sce',
    function($scope, $http, $routeParams, $sce) {
         $scope.toTrustedHTML = function( html ){
            return $sce.trustAsHtml( html );
        }
    $http.get('http://idp-api.herokuapp.com/blog/'+ $routeParams.postId).success(function(data)
        {
            //console.log(data);
            $scope.post = data;
            $scope.postId = $routeParams.postId;
        });
    }]);
    
    
    
Knightspider.controller('MyCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});






Knightspider.controller('PageCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $scope.data = $routeParams.pageName;
        $scope.isActive = function(route) {
        return route === $location.path();
       }
    }]);
    
    
 Knightspider.controller('DropdownCtrl', function ($scope, $log) {
  $scope.status = {
    isopen: false
  };
  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});

Knightspider.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  slides.push({
      image: '/img/projectgroep.jpg',

    })
      slides.push({
      image: '/img/web.jpg',
        text: 'Volledig online via Website en WebApp'
    })
});

Knightspider.controller('analyticsCtrl', function ($scope,$http) {
  $scope.logs = [];
  $scope.updateLogs = function(){
    $http.get('http://idp-api.herokuapp.com/log').success(function(data) {
        $scope.logs = data;
    }).
    error(function() {
        $scope.error = true;
    });
  };
  /*var evsrc  = new EventSource("https://idp-api.herokuapp.com/subscribe");
  evsrc.addEventListener("log", function (ev) {
    $scope.logs.unshift(ev.data);
  }, false);
  evsrc.onerror = function (ev) {
    debugger;
    console.log("readyState = " + ev.currentTarget.readyState);
  }*/
  var timer = setInterval($scope.updateLogs, 1000)
  $scope.updateLogs();
});
