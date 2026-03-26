import React from 'react'
import "./Visualizer.css";

export default function Visualizer({ array }) {
  console.log(array)
  return (
    <div className="array-container">
      {array && array.map((item, index) => (
        <div
         key={index} 
          className='bar' 
          style={{ height: `${item}px` }}>
          {item}
        </div>
      ))}
    </div>
  )
}
