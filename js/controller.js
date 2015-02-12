var projects = angular.module('projects', []);

projects.controller('projectList', function($scope) {
  $scope.projects = [
    {
      'img': 'img/zeke-y-design.png',
      'url': '#',
      'title': 'Zeke Y Design',
      'description': 'This website. Made with a mix of Javascript, jQuery, and Angular JS, I created it so I would have a public portfolio and a way for people to contact me.'
    },
    {
      'img': 'img/lnxreviews.png',
      'url': 'http://lnxreviews.com',
      'title': 'LnxReviews',
      'description': 'LnxReviews is a project I worked on by myself, to improve my skills with WordPress, and to provide a single place for reliable, accurate, and up to date reviews of Linux distributions.'
    }
  ];
});