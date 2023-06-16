/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    if (indexOfTodo < this.todos.length){
      const p1 = this.todos.slice(0, indexOfTodo);
      const p2 = this.todos.slice(indexOfTodo + 1, );
      this.todos = [].concat(p1).concat(p2);
    }
  }

  update(index, updatedTodo){
    if (index < this.todos.length){
      this.todos[index] = updatedTodo;
    };
  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    if (indexOfTodo < this.todos.length){
      return this.todos[indexOfTodo];
    }
    else {
      return null;
    }
  }

  clear(){
    this.todos = [];
  }

}

module.exports = Todo;
