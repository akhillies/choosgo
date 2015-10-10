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
      image: 'https://pmcdeadline2.files.wordpress.com/2013/01/patrickheadshot.rt__130116211928.jpg'
    }
    {
      name: 'Professor X',
      actor: 'Patrick Stewart',
      image: 'https://pmcdeadline2.files.wordpress.com/2013/01/patrickheadshot.rt__130116211928.jpg'
    }
  ];
});
