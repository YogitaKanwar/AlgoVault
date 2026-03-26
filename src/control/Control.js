import React from 'react'

export default function Control({handleNewArrayGenerate,handleSorting}) {
  return (
    <div className='controls-container'>
      <button className='neu-button' onClick={handleNewArrayGenerate}>Generate New Array</button>
      <select className='neumorphism-dropdown' onChange={handleSorting}>
        <option value=''>Select Sorting</option>
        <option value='bubbleSort'>Bubble Sorting</option>
      </select>
    </div>
  )
}
