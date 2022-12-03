import React from 'react'

export const Footer = React.memo(({ clearAllTodos }) => (
  <footer className="d-flex justify-content-center">
    <button onClick={() => clearAllTodos()} type="button" className="btn btn-danger">Clear All ToDo List</button>
  </footer>
))
