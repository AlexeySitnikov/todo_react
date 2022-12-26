import {
  ADD_NEW_TODO, ADD_NEW_TODOS, CHANGE_STATUS_TODO, CLEAR_ALL_TODOS, DELETE_TODO,
} from '../types/todosTypes'

export const addNewTodoAC = (title) => ({
  type: ADD_NEW_TODO,
  payload: {
    id: Date.now(),
    status: false,
    title,
  },
})

export const addNewTodosAC = (newTodos) => ({
  type: ADD_NEW_TODOS,
  payload: newTodos,
})

export const getNewTodosAC = () => async (dispatch) => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
  const todos = await responce.json()
  const preparedTodo = todos.map((todo) => {
    const { userId, completed, ...restTodo } = todo
    return {
      ...restTodo,
      status: completed,
    }
  })
  dispatch(addNewTodosAC(preparedTodo))
}

export const deleteTodoAC = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const changeStatusTodoAC = (id) => ({
  type: CHANGE_STATUS_TODO,
  payload: id,
})

export const clearAllTodosAC = () => ({
  type: CLEAR_ALL_TODOS,
})
