import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { getInitialState, LS_REDUX_TODO } from './initialState'
import { rootReducer } from './reducers/rootReduce'

export const store = createStore(rootReducer, getInitialState(), composeWithDevTools(
  applyMiddleware(thunk),
))

store.subscribe(() => {
  localStorage.setItem(LS_REDUX_TODO, JSON.stringify(store.getState()))
})
