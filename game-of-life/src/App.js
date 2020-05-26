import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import AnimFrame from './functions/onAnimFrame.js'
import { Window } from './components/Window.js'
import {drawBoard} from './utils/drawBoard.js'

function App() {

  window.onload = function draw() {
    var canvas = document.getElementById('canvas');
    // console.log('WIDTH:',canvas.style.width)
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
    }

    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Here is the screen buffer array we can manipulate:

    let screenBuffer = imageData.data;



    drawBoard()

    // index = (y * width + x) * 4

    console.log('SCREEN BUFFER:', screenBuffer)

  }




  return (
    <div className="App">
      <h1>Life</h1>
      <Window width={500} height={500} />

    </div>
  );
}


export default App;
