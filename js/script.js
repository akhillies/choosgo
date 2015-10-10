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
  $scope.locations = [
    {
      name: 'Golden Gate Bridge',
      actor: '1700 Fillmore St, San Francisco, CA 94115',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ggb_by_night.jpg'
    },
    {
      name: 'Cyclops',
      actor: 'James Marsden',
      image: 'http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2014/09/23/james-marsden-.jpg.jpeg?itok=PeCqw-9O'
    },
    {
      name: 'Professor X',
      actor: 'Patrick Stewart',
      image: 'https://pmcdeadline2.files.wordpress.com/2013/01/patrickheadshot.rt__130116211928.jpg'
    }
  ];
});
