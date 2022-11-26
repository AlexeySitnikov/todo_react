import styles from './main.module.css'

const Main = ({todos, deleteTodo, changeTodoStatus})=>{
  if (todos.length === 0){
    return <p>Todo list is empty...</p>
  }
  return (
    <main>
      <ul className="list-group">
        {
          todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
             <div className={`d-flex align-items-center`}>
              <span className='me-4'>{i+1}. </span>
              <span className={`${todo.status ? styles.done:''}`}>{todo.title} </span>
             </div>
             <div>
                <button onClick={()=>changeTodoStatus(todo.id)} type="button" className="btn mx-2 btn-success">Done</button>
                <button onClick={()=>deleteTodo(todo.id)} type="button" className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))
        }
        
      </ul>
    </main>
  );
}

export {
  Main
}