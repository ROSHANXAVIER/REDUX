import React from 'react';
import {useState} from "react";

function Cent() {
    const [count,setCount]=useState(0)
  return <div>
      <div>countnews:{count}</div>
      <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
  </div>;
}

export default Cent;
