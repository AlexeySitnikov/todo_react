import styles from './main.module.css'

const Main = ({todos, deleteTodo, changeTodoStatus})=>{
  return (
    <main>
      <ul className="list-group">
        {
          todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
             <span className={`d-flex align-items-center ${todo.status ? styles.done:''}`}>{i+1}. {todo.title} </span>
             <div>
                <button onClick={()=>changeTodoStatus(todo.id)} type="button" className="btn mx-2 btn-success">Success</button>
                <button onClick={()=>deleteTodo(todo.id)} type="button" className="btn btn-danger">Danger</button>
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