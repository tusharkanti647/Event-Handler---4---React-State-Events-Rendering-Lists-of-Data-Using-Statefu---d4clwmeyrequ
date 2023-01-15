import React from 'react'
import '../styles/App.css';
import { useState } from 'react';

const App = () => {

  const [count,setcount]=useState(0);

  const handleDoubleClick = (event) =>{
    if(count === 2) {
      console.log("I was double clicked");
      setcount(0);
      
  } else {
      console.log("I was not double clicked");
  }
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={handleDoubleClick} onClick={()=>setcount(count+1)}>Double click me</button>
    </div>
  )
}


export default App;
