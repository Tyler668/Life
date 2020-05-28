import React, { useRef, useState, useEffect } from 'react';
import { useAnimFrame } from '../utils/useAnimFrame.js'
import moment from 'moment'
import { drawBoard, render, nextGen, customRender, emptyGrid } from '../utils/drawBoard.js';



export const Window = (props) => {
    // const canvasRef = useRef(null);
    // const [stopAnimation, setStopAnimation] = useState(false);
    let grid;



    useEffect(() => {
        grid = drawBoard()
        // grid = emptyGrid()
        render(grid)
    })


    //Somewhere around here we'll be declaring rules and new generations, likely triggering nextgens in the doAnimation func

    const doAnimation = (elapsedTime) => {
        // sleep(1000)
        grid = nextGen(grid)
        render(grid)
    };

    function handleReload(e) {
        e.preventDefault();
        window.location = '/'
    }

    function handlePause(e) {
        e.preventDefault()
        // setStopAnimation(true)
        cancelAnimation()
        // cancelAnimationFrame()
        // setStarted(false)
        // console.log('stopAnimation:', stopAnimation)
    }

    function handleStart(e) {
        e.preventDefault()
        // setStarted(true)
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

    function handleCustomClick(e) {
        // e.preventDefault()
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        

        console.log('[', x, ',', y, ']')

        
        grid = customRender(grid, x, y)
        render(grid)
    }






    //This uses our custom hook to repeat the doAnimation endlessly
    const [cancelAnimation, setStarted, onFrame, continueAnimation, slowTime] = useAnimFrame(moment.now(), doAnimation)




    return (
        <div className='controls'>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleReload}>Random</button>
            <button onClick={handleCustom}>Custom</button>
            <button onClick={handleSlow}>Toggle SloMo</button>
        </div>
    );
}


export default Window;
