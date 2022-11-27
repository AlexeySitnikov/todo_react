import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useTodos } from './customHooks/useTodos';


function App() {
  const {addNewTodo, deleteTodo, changeTodoStatus, todos, clearAllTodos, expensiveValue} = useTodos();
  
  //console.log({todos})

  return (
    <div className='container py-5'>
      <Header addNewTodoFunc = {addNewTodo}/>
      <hr />
      <Main changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} todos = {todos}/>
      <hr />
      {expensiveValue}
      <hr />
      <Footer clearAllTodos={clearAllTodos}/>
    </div>
  );
}

export default App;
