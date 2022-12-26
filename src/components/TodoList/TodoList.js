import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewTodosAC } from '../../redux/actionsCreators/todosAC'
import { TodoItem } from '../TodoItem/TodoItem'

export function TodoList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewTodosAC())
  }, [dispatch])

  const todos = useSelector((store) => store.todos)
  if (!todos.length) {
    return <p>Todo list is empty...</p>
  }
  return (
    <ul className="list-group">
      {
          todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              {...todo}
              idx={i}
            />
          ))
        }
    </ul>
  )
}
