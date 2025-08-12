import { useEffect } from 'react'
import {useRef} from 'react'
import { useState } from 'react'

//debounce using state variable instead of ref
/*In the App component, we maintain inputState to track the current input value and 
update it in handleChange whenever the user types. This value is passed to the useDebounce 
hook along with a delay (e.g., 1000 ms). Inside useDebounce, we store a separate state
debouncedValue, initially set to the input value. A useEffect watches for changes in value
or delay. When triggered, it first clears any existing timer (via the cleanup function) to 
avoid multiple scheduled updates. Then it starts a new timer, and once the delay passes without 
further changes, it updates debouncedValue to match value. In the App component, another 
useEffect watches debouncedValue. This ensures the backend call only happens when the user
has stopped typing for the specified delay. Using state instead of refs here means the
component re-renders when the debounced value changes, allowing us to directly react to it in 
UI or side effects.*/
function useDebounce(value, delay){
  const [debouncedState, setDebouncedState]=useState(value)

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebouncedState(value)
    }, delay)

    return()=>{
      clearTimeout(timer)
    }  },[value, delay])

  return debouncedState
}
export default function App()  {

  function sendBackendCall(){
    //expensive operation
    console.log("Backend call")
  }
  
  const [inputState, setInputState]=useState("")
  const debouncedState=useDebounce(inputState, 1000)
  
  function handleChange(e){
    setInputState(e.target.value)
  }
  
  

  useEffect(()=>{
    sendBackendCall()
  },[debouncedState])
  
  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleChange} />
    </div>)
}
