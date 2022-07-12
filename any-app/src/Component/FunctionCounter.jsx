import React,{useState} from 'react'

function FunctionCounter() {
    const [count, setCount]=useState(0)
   const increment=()=>{
        setCount(count+1)
    }
   const Decrement=()=>{
        setCount(count-1)
    }
  return (
    <>
    <h1>COUNT {count}</h1>
    <button onClick={increment}>Increase</button>
    <button onClick={Decrement}>Decrease</button>
    </>
  )
}

export default FunctionCounter