import React, {useState} from 'react'
import "./Counter.css"

 const CounterFunction = () => {
    var[count,handleUpdate] = useState(0)
   return (
    <>
       
    <h1>Counter: {count} </h1>
    <hr/>
    <button className='funn' onClick={()=>handleUpdate(count + 1)}>Increase</button>
     <button className='fun' onClick={()=>handleUpdate(count -1)}>Decrease</button> 
    </>
  )
}

export default CounterFunction