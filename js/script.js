// Code goes here

angular.module('myApp', []);

angular.module('myApp').directive('datarBase', function () {
  return {
    restrict: 'A',
    scope: {
      datar: '='
    },
    replace: true,
    templateUrl: 'html/data-base-template.html',
    link: function (scope, elem, attrs) {
      scope.hi = function () {
        alert('Why hello there, I\'m ' + scope.datar.name + '.');
      };
      elem.find('img').on('click', function () {
        window.open(scope.datar.image);
      });
    }
  };
});

angular.module('myApp').controller('myCtrl', function ($scope) {
  $scope.locations = [
    {
      name: 'Golden Gate Bridge',
      actor: 'Golden Gate Bridge, California',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ggb_by_night.jpg'
    },
    {
      name: 'Dosa!',
      actor: '1700 Fillmore St, San Francisco, CA 94115',
      image: 'http://www.sfstation.com/files/2011/06/dosa.jpg'
    },
    {
      name: 'Golden Gate Park',
      actor: 'San Francisco, CA',
      image: 'http://img.timeinc.net/time/photoessays/2008/san_francisco/sf_golden_gate.jpg'
    }
  ];
});
