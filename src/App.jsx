import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [color,setColor]=useState("black")
  return (
    <div className='bg' style={{backgroundColor:color,width:'100%',height:'100vh'}}>
      <div className="d-flex justify-content-center  px-2">
        <div className="d-flex justify-content-center px-4 py-1 m-5 rounded-pill bg-light">
          <button onClick={()=>setColor("red")} className='btn btn-primary px-4 py-1 mx-2 border-0 rounded-pill text-light' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='btn btn-primary px-4 py-1 mx-2 border-0   rounded-pill text-light' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("orange")} className='btn btn-primary px-4 py-1 mx-2 border-0  rounded-pill text-light' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("green")} className='btn btn-primary px-4 py-1 mx-2 border-0  rounded-pill text-light' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("pink")} className='btn btn-primary px-4 py-1 mx-2 border-0  rounded-pill text-light' style={{backgroundColor:"pink"}}>Pink</button>
        </div>

      </div>
 
    </div>
  )
}

export default App