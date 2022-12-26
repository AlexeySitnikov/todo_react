import styles from './styles.module.css'

export function TodoItem({
  id, title, status, idx, deleteTodo, changeTodoStatus,
}) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span className="me-4">
          {idx + 1}
          .
          {' '}
        </span>
        <span className={`${status ? styles.done : ''}`}>
          {title}
          {' '}
        </span>
      </div>
      <div>
        <button onClick={() => changeTodoStatus(id)} type="button" className="btn mx-2 btn-success">Done</button>
        <button onClick={() => deleteTodo(id)} type="button" className="btn btn-danger">Delete</button>
      </div>
    </li>

  )
}
