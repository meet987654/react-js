import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <CustomButton count={count} setCount={setCount}></CustomButton>
  )
}


function CustomButton(props){
  function onclickhandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onclickhandler}>Counter {props.count}</button>
}

export default App
