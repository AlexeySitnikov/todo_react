import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TODOS_KEY_IN_LS } from './utils/constants';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const todosFromLS = localStorage.getItem(TODOS_KEY_IN_LS);
    const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : [];
    setTodos(prepareTodos);
  }, []);

  useEffect(()=>{
    localStorage.setItem(TODOS_KEY_IN_LS, JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (title) =>{
    const newTodo = {
      title,
      id: Date.now(),
      status: false
    }

    setTodos(prev => [...prev, newTodo]);

  }

  const deleteTodo = (id)=>{
    setTodos(prev => prev.filter((todo)=>todo.id !== id))
  }

  const changeTodoStatus = (id)=>{
    setTodos(prev=>prev.map((todo)=>{
      if (todo.id === id){
        return {
          ...todo,
          status: !todo.status
        }
      }
      return todo;
    }))
  }
  //console.log({todos})

  return (
    <div className='container py-5'>
      <Header addNewTodoFunc = {addNewTodo}/>
      <hr />
      <Main changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} todos = {todos}/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
