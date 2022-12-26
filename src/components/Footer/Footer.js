import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllTodosAC } from '../../redux/actionsCreators/todosAC'

export const Footer = React.memo(() => {
  const dispatch = useDispatch()
  const clearAllTodosHandler = () => {
    dispatch(clearAllTodosAC())
  }

  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearAllTodosHandler} type="button" className="btn btn-danger">Clear All ToDo List</button>
    </footer>
  )
})
