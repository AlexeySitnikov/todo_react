import { useCallback, useEffect, useMemo, useState } from "react";
import { TODOS_KEY_IN_LS } from "../utils/constants";
import { expensiveFunc } from "../utils/expensiveFunc";

export const useTodos = ()=>{

  const [todos, setTodos] = useState([]);  

  useEffect(()=>{
    const todosFromLS = localStorage.getItem(TODOS_KEY_IN_LS);    
    const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : [];
    if (prepareTodos.length){
      setTodos(prepareTodos);
    }    
  }, []);
  
  

  useEffect(()=>{
    localStorage.setItem(TODOS_KEY_IN_LS, JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = useCallback((title) =>{
    const newTodo = {
      title,
      id: Date.now(),
      status: false
    }

    setTodos(prev => [...prev, newTodo]);

  }, []);

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

  const clearAllTodos = useCallback(()=>{
    setTodos([]);
  }, []);

  const expensiveValue = useMemo(()=>{
    return expensiveFunc(todos.length)
  }, [todos.length]);

  return {
    addNewTodo,
    deleteTodo,
    changeTodoStatus,
    todos,
    clearAllTodos,
    expensiveValue
  }
}