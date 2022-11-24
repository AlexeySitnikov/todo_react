import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {

  const [todos, setTodos] = useState([]);

  const addNewTodo = (title) =>{
    const newTodo = {
      title,
      id: Date.now(),
      status: false
    }

    setTodos(prev => [...prev, newTodo]);

  }

  //console.log({todos})

  return (
    <div className='container py-5'>
      <Header addNewTodoFunc = {addNewTodo}/>
      <hr />
      <Main todos = {todos}/>
      <Footer />
    </div>
  );
}

export default App;
