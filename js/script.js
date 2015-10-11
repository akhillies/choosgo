// Code goes here
angular.module('myApp', []);

angular.module('myApp').directive('actorTile', function () {
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
  $scope.mutants = [
    {
      name: 'Wolverine',
      actor: 'Hugh Jackman',
      image: 'https://latimesherocomplex.files.wordpress.com/2030/04/hughjackman4.jpg'
    },
    {
      name: 'Cyclops',
      actor: 'James Marsden',
      image: 'http://s3.amazonaws.com/cmi-niche/assets/pictures/39932/content_James-Marsden-Los-Angeles-Confidential-1.jpg?1411489304'
    },
    {
      name: 'Professor X',
      actor: 'Patrick Stewart',
      image: 'https://pmcdeadline2.files.wordpress.com/2013/01/patrickheadshot.rt__130116211928.jpg'
    }
  ];
});
