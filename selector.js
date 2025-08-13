//code from counter.js
/*
import { atom ,selector} from 'recoil'

export const counterState = atom({
  key: 'counterState',
  default: 0,
})

export const isEvenSelector=selector({
  key:'isEvenSelector',
  get:({get})=>{
    const counter=get(counterState)
    return counter%2===0
  }
})
*/
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterState, isEvenSelector } from './store/counter'

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <Counter />
        <Buttons />
        <EvenOrOdd />
      </div>
    </RecoilRoot>
  )
}

function Counter(){
  return <div>Counter: {useRecoilValue(counterState)}</div>
}

function Buttons(){
  return(
    <div>
      <Increase />
      <Decrease />
    </div>
  )
}

function Increase(){
  const setCounter=useSetRecoilState(counterState)
  return <button onClick={()=>{setCounter(c=>c+2)}}>+</button>
}

function Decrease(){
  const setCounter=useSetRecoilState(counterState)
  return <button onClick={()=>{setCounter(c=>c-1)}}>-</button>
}

function EvenOrOdd(){
  const isEven=useRecoilValue(isEvenSelector)
  return <div>{isEven?'짝수':'홀수'}</div>
}
