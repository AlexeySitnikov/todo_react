import { TodoItem } from '../TodoItem/TodoItem'

export function TodoList({ todos, deleteTodo, changeTodoStatus }) {
  return (
    <ul className="list-group">
      {
          todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              {...todo}
              idx={i}
              deleteTodo={deleteTodo}
              changeTodoStatus={changeTodoStatus}
            />
          ))
        }
    </ul>
  )
}
