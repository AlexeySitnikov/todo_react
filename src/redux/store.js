import { createStore } from 'redux'
import { initialState } from './initialState'
import { rootReducer } from './reducers/rootReduce'

export const store = createStore(rootReducer, initialState)
