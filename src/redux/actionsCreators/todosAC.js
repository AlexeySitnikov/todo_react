import {
  ADD_NEW_TODO, CHANGE_STATUS_TODO, CLEAR_ALL_TODOS, DELETE_TODO,
} from '../types/todosTypes'

export const addNewTodoAC = (title) => ({
  type: ADD_NEW_TODO,
  payload: {
    id: Date.now(),
    status: false,
    title,
  },
})

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
