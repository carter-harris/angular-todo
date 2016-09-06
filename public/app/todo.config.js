angular.module('TodoApp')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'TodoCtrl',
        controllerAs: 'todo',
        templateUrl: 'app/todo.html'
      })
      .otherwise('/')
  })
