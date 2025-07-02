  //TODO: three function 1) will load the write queries, and 2) we add the query 3) delete the query and update UI

import { useState } from 'react'
import "./styles.css"

function App() {

  const[input, setInput] = useState("");
  //list to store the current enter TODO and setTODO
  const[toDo, setToDos] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.trim()){
      //toDo is the current state, 
      //input is the new value from the user, 
      //...toDo is the spread Operator to copy all items from current array, 
      //[...toDo,input] creates a new array new item added at end.
      setToDos([...toDo, input])
      setInput("");
    }

  }

  // upon clicking the delete button it should delete it from array and update the UI
  const handleDelete =(indextoRemove)=>{
    setToDos(prev => prev.filter((_,index) => index !== indextoRemove ))
  }

  return (
    <div className = "main-content">
    
    <div className = "nav-bar">
      <h1>To Do List</h1>
    </div>

    <form onSubmit={handleSubmit} className='new-form'>

      <input type = "text" placeholder='Enter your query' className='input-enter' value = {input}
        onChange={(e) => setInput(e.target.value)}
      >
      </input>

      <button type = "submit" className = "add-button"> Add </button>

    </form>

    <div className = "content-info">

      <ul>

      {toDo.map((todo, index) =>(
        <li key = {index} className = "todo-row">
        <input className = "checkbox" type = "checkbox" id = {`todo-${index}`}></input>
        <label htmlFor={`todo-${index}`} className = "todo-item">{todo}</label>
        <button type = "button" className = "deleteBtn" onClick={()=>handleDelete(index)}> Delete </button>
        </li>
      ))}
      </ul>
     
    

    </div>


    </div>
  )
}

export default App
