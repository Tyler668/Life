import React, { useRef, useState, useEffect } from 'react';
import { useAnimFrame } from '../utils/useAnimFrame.js'
import moment from 'moment'
import { drawBoard, render, nextGen, customRender, emptyGrid } from '../utils/drawBoard.js';



export const Window = (props) => {
    let grid;
    let [gen, setGen] = useState(0)

    // Set up board on launch
    useEffect(() => {
        grid = drawBoard()
        render(grid)
    })


    // Recursive cb function, calls next frame, increments generation
    const doAnimation = (elapsedTime) => {
        gen = gen+1
        grid = nextGen(grid)
        render(grid)  
    };


    // Handlers for the various button functionalities
    function handleReload(e) {
        e.preventDefault();
        window.location = '/'
    }

    function handlePause(e) {
        
        e.preventDefault()
        cancelAnimation()
        
    }

    function handleStart(e) {
        e.preventDefault()
        requestAnimationFrame(onFrame)
        continueAnimation.current = true
    }

    function handleSlow(e) {
        e.preventDefault();
        slowTime.current = !slowTime.current
    }

    let canvas = document.querySelector("canvas")

    function handleCustom(e) {
        grid = emptyGrid()
        render(grid)
        canvas.addEventListener("click", handleCustomClick);
    }

    // Send the position of the user's mouse relative to the canvas to the customRender function
    function handleCustomClick(e) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        console.log('[', x, ',', y, ']')
        grid = customRender(grid, x, y)
        render(grid)
    }



    //Destructuring the things we need from the animation custom hook
    const [cancelAnimation, setStarted, onFrame, continueAnimation, slowTime, generation] = useAnimFrame(moment.now(), doAnimation)


    return (
        <div>
            <div>
                <h2 className = 'title'>{`Generation: ${gen}`}</h2>
            </div>
            <div className='controls'>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleReload}>Random</button>
                <button onClick={handleCustom}>Custom</button>
                <button onClick={handleSlow}>Slo-Mo</button>
            </div>
        </div>
    );
}


export default Window;
