import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodoAC } from '../../redux/actionsCreators/todosAC'

export const Form = React.memo(() => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (input) {
      dispatch(addNewTodoAC(input))
      setInput('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          type="text"
          value={input}
          placeholder="Title"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
})
