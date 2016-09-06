'use strict';
angular.module('TodoApp').controller("TodoCtrl", function ($http) {
  const todo = this;

  todo.title = 'Todo App';
  todo.filter2 = '';
  todo.potato = '';
  todo.variableName = '';
  todo.newTodo = '';

  todo.taskType = 'home';
  todo.selectedTodo = 'nothing';


  $http.get('/data/tasks.json')
    .then((response) => {
      console.log("data", response );
      todo.tasks = response.data.tasks;
  })


  todo.addTodo = function () {
    console.log("add");
    todo.tasks.push({ name: todo.newTodo, type: todo.taskType});
    todo.newTodo = '';
  }


  todo.removeTodo = function (todo) {
    const taskIndex = todo.tasks.indexOf(todo);
    if (taskIndex >= 0) {
      todo.tasks.splice(taskIndex, 1); // eslint-disable-line no-magic-numbers
    }
  }

})