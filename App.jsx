
import { useState } from 'react'
import './App.css'
let counter=3

function App() {
 
  
  const [todos,setTodos]=useState(
    [
      {
         id:1,
         title:"go to gym",
         description:"do it today"
    },
    {
      id:2,
      title:"go to class",
      description:"do it today"
     },
     {
      id:3,
      title:"go to play",
      description:"do it today"
 } 
  ]
  )
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
         <>
         <button onClick={addTodo}>add todo</button>
         {
          todos.map(todo=>(<Todo key={todo.id} title={todo.title} description={todo.description}></Todo>))
         }
         </>
  )
}
function Todo({title,description}){
  return<div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default App
