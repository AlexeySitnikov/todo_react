import { TodoList } from '../TodoList/TodoList'

function Main({ todos, deleteTodo, changeTodoStatus }) {
  if (todos.length === 0) {
    return <p>Todo list is empty...</p>
  }
  return (
    <main>
      <TodoList todos={todos} deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus} />
    </main>
  )
}

export {
  Main,
}
