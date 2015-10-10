// Code goes here

angular.module('myApp', []);

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
      image: 'http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2014/09/23/james-marsden-.jpg.jpeg?itok=PeCqw-9O'
    },
    {
      name: 'Professor X',
      actor: 'Patrick Stewart',
      image: 'https://pmcdeadline2.files.wordpress.com/2013/01/patrickheadshot.rt__130116211928.jpg'
    }
  ];
});
