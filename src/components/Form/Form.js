import { useState } from "react";

export const Form = ({addNewTodoFunc})=>{

  const [input, setInput] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    if (input){
      addNewTodoFunc(input);
      setInput('');
    }
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input 
        type="text" 
        value = {input} 
        placeholder="Title" 
        className="form-control"
        onChange = {(e) => setInput(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}