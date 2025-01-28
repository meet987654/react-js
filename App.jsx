
import { useState } from 'react'
import './App.css'


function App() {
  
  const [title,setTitle]=useState("my name is meet")

  function changeTitle({title}){
    setTitle("my name is"+Math.random())
  }

  return (
         <>
         <button onClick={changeTitle}>click me to change the title</button>
         <Header title={title}></Header>
         <Header title="meet1"></Header>
         </>
  )
}



function Header({title}){
  return<div>
    {title}
  </div>
}
export default App
