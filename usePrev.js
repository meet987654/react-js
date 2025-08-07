
import React, {useEffect,useState,useRef} from "react"  ;


function usePrev(value){
  const ref=useRef()

  useEffect(()=>{
    ref.current=value
  },[value])  

  return ref.current
}
export default function Counter(){

  const [count,setCount] = useState(0)
  const prevCount=usePrev(count)

  return(
    <div>
      <h1>Current Count:{count}</h1>
      <h1>Previous Count:{prevCount}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
// Explanation:
// This component uses a custom hook called usePrev to track the previous value of the 'count' state variable. 
// Whenever the 'count' state changes (by clicking the button), the entire component re-renders. 
// The usePrev hook takes the current count as an argument and uses useRef to store the previous value. 
// During the render phase, it returns ref.current, which holds the value from the previous render 
// (because ref is only updated after the render by useEffect). 
// On the first render, ref.current is undefined since useEffect hasn't run yet. 
// After each update, useEffect stores the new value in ref.current, so on the next render, 
// usePrev can return the previous count correctly. This allows us to display both the current and previous count values on screen.
