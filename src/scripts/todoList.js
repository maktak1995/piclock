/**
 * Created by makitake on 2017/07/10.
 */
let todos = []

function addTodo () {
  todos.push(document.getElementById('todo').value)
  updateList()
}

function clearTodo () {
    todos = []
    document.getElementById('todo').value = ''
    updateList()
}

function updateList () {
  let todolist = '<table id="todos">\n'
  for (let count = 0; count < todos.length; count++) {
    if (todos[count] != '') {
      todolist += `<tr><td><input type="checkbox" name="todo" value="${todos[count]}">${todos[count]}</td></tr>\n`
    }
  }
  todolist += '</table>\n'
  document.getElementById('todoList').innerHTML = todolist
  document.getElementById('todo').value = ''
}
