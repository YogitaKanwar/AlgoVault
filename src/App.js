import logo from './logo.svg';
import './App.css';
import Control from './control/Control';
import Visualizer from './control/Visualizer';
import React, { useState } from 'react';
import { bubbleSort } from './algorithm/BubbleSort';

function App() {
  const [array, setArray]=useState([]);
  const handleNewArrayGenerate =() => {
    const newArray=Array.from({length : 30},() =>
      Math.floor(Math.random() * 500)
    );
    setArray(newArray)
  }
  const handleSorting = (e) =>{
    const SortingMethod = e.target.value;
    switch (SortingMethod) {
      case 'bubbleSort':
        const animationArr = bubbleSort(array);
        bubbleAnimation(animationArr)
        
        break;
    
      default:
        break;
    }

  }
  function bubbleAnimation(animation){
    const barEle = document.getElementsByClassName('bar');
    for (let i = 0; i < animation.length; i++) {
      let [barOneInd,barTwoInd,swap]=animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[barTwoInd];
      setTimeout(()=> {
        barOne.style.background = swap ? 'red':'yellow';
        barTwo.style.background= swap ? 'red' : 'yellow';
        if(swap){
          const heightTemp = barOne.style.height;
          barOne.style.height= barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText=content;
        }



      },1000)
      
    }


  }
  return (
    <div className="App">
      <h1>Let's Make it to IIT SURE Internship Hyderabad</h1>
      <Control handleNewArrayGenerate={handleNewArrayGenerate}
      handleSorting={handleSorting}/>
      <Visualizer array={array}/>
    </div>
  );
}

export default App;
