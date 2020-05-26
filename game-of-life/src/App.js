import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import AnimFrame from './functions/onAnimFrame.js'
import { Window } from './components/Window.js'
import {draw} from './functions/drawShapes.js'

function App() {
  // function draw() {
  //   var canvas = document.getElementById('canvas');
  //   if (canvas.getContext) {
  //     var ctx = canvas.getContext('2d');

  //     ctx.fillRect(25, 25, 100, 100);
  //     ctx.clearRect(45, 45, 60, 60);
  //     ctx.strokeRect(50, 50, 50, 50);
  //   }
  // }
  // useEffect(() =>{
  //   draw()
  // })


  

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Window width={'500px'} height={'500px'} />
    </div>
  );
}


export default App;
