'use strict';
app.controller("TodoCtrl", ($scope, $http) => {

  $scope.title = 'Angular Todo - PFM!';
  $scope.filter2 = '';
  $scope.potato = '';
  $scope.variableName = '';
  $scope.newTodo = '';

  $scope.taskType = 'home';
  $scope.selectedTodo = 'nothing';

  $scope.congratsMessage = false;


  $http.get('/data/tasks.json')
    .then((response) => {
      $scope.tasks = response.data.tasks;
  })


  $scope.addTodo = () => {
    $scope.tasks.push({ name: $scope.newTodo, type: $scope.taskType});
    $scope.newTodo = '';
  }


  $scope.removeTodo = (task) => {
    const taskIndex = $scope.tasks.indexOf(task);
    if (taskIndex >= 0) {
      $scope.tasks.splice(taskIndex, 1); // eslint-disable-line no-magic-numbers
    }
  }

})
