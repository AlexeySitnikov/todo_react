export const LS_REDUX_TODO = 'LS_REDUX_TODO'

export const initialState = {
  todos: [],
}

export const getInitialState = () => {
  const stateFromLS = localStorage.getItem(LS_REDUX_TODO)
  return stateFromLS ? JSON.parse(stateFromLS) : initialState
}
