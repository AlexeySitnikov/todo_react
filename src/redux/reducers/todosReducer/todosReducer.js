import { initialState } from '../../initialState'
import {
  ADD_NEW_TODO, ADD_NEW_TODOS, CHANGE_STATUS_TODO, CLEAR_ALL_TODOS, DELETE_TODO,
} from '../../types/todosTypes'

// eslint-disable-next-line default-param-last, consistent-return
export const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: return [...state, action.payload]
    case ADD_NEW_TODOS: return action.payload
    case DELETE_TODO: return state.filter((todo) => todo.id !== action.payload)
    case CHANGE_STATUS_TODO: return state.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          status: !todo.status,
        }
      }
      return todo
    })
    case CLEAR_ALL_TODOS: return []

    default: return state
  }
}
