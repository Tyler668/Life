import React, { useEffect, useRef } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import AnimFrame from './functions/onAnimFrame.js'
import { Window } from './components/Window.js'
import Info from './components/info.js'
import { drawBoard } from './utils/drawBoard.js'



function App() {


  // window.onload = function draw(){
  //   drawBoard()
  // }


  return (
    <div className="App">
      
      <div className='display'>
        {/* <Info className = 'info'/> */}
        <Window />
      </div>
    </div>
  );
}


export default App;


//Useful get pixel value function
/*

 * Get a pixel value from imageData
 *
 * @param imageData HTML canvas imagedata from getImageData()
 * @param x X coordinate to get pixels from
 * @param y Y coordinate to get pixels from
 * @return Array [R,G,B,A] for the pixel in question, or null if out of bounds

function getPixel(imageData, x, y) {
  const w = imageData.width; // Conveniently the width is here
  const h = imageData.height;

  if (x < 0 || x >= w || y < 0 || y >= h) {
      // Out of bounds
      return null;
  }

  // Compute index within the array
  const index = (w * y + x) * 4;

  // Return a copy of the R, G, B, and A elements
  return imageData.data.slice(index, index + 4);
}

// Example Usage

const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

const pixelRGBA = getPixel(imageData, 10, 10);

console.log(pixelRGBA);

*/