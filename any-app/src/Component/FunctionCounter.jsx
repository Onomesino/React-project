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
    < div className="All">
    <h1 className="cen">COUNT {count}</h1>
    <hr />
    <button className="primary" onClick={increment}>Increase</button>
    <button className="primary" onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default FunctionCounter