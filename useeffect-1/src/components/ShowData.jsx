import React from 'react'
import { useState,useEffect } from 'react'
const ShowData = () => {
const [show,setShow] = useState(true)
  return (
    <div>
      {show ? <h1>Hello counter</h1>:null}
      <button onClick={()=>setShow(!show)}>Toggle </button>
    </div>
  )
}

export default ShowData
