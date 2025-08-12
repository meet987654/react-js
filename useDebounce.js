import {useRef} from 'react'

function useDebounce(debounceFun){
  const timer=useRef(null)
  const fn=()=>{
    clearTimeout(timer.current)
    timer.current=setTimeout(()=>{
      debounceFun()
    },1000)

  }

  return fn
}
export default function App()  {

  function sendBackendCall(){
    console.log("Backend call")
  }

  const debouncedFunction=useDebounce(sendBackendCall)
  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={debouncedFunction} />
    </div>)
}
