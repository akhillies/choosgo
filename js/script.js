// Code goes here

angular.module('myApp', []);

angular.module('myApp').directive('actorTil', function () {
  return {
    restrict: 'A',
    scope: {
      actor: '='
    },
    replace: true,
    templateUrl: 'html/actor-tile-template.html',
    link: function (scope, elem, attrs) {
      scope.hi = function () {
        alert('Why hello there, I\'m ' + scope.actor.name + '.');
      };
      elem.find('img').on('click', function () {
        window.open(scope.actor.image);
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
