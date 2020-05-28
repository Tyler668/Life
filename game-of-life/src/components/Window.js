import React, { useRef, useState, useEffect } from 'react';
import { useAnimFrame } from '../utils/useAnimFrame.js'
import moment from 'moment'
import { drawBoard, render, nextGen, emptyGrid } from '../utils/drawBoard.js';

function sleep(milliseconds) { //Slow the roll
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


export const Window = (props) => {
    const canvasRef = useRef(null);
    const [stopAnimation, setStopAnimation] = useState(false);
    let grid;



    useEffect(() => {
        grid = drawBoard()
        // grid = emptyGrid()
        render(grid)
    })
    

    //Somewhere around here we'll be declaring rules and new generations, likely triggering nextgens in the doAnimation func
    
    const doAnimation = (elapsedTime) => {
        // sleep(100)
            grid = nextGen(grid)
            render(grid)
    };

    function handleReload(e){
        e.preventDefault();
        window.location = '/'
    }

    function handlePause(e){
        e.preventDefault()
        // setStopAnimation(true)
        cancelAnimation()
        // cancelAnimationFrame()
        // setStarted(false)
        console.log('stopAnimation:', stopAnimation)
    }

    function handleStart(e){
        e.preventDefault()
        // setStarted(true)
        requestAnimationFrame(onFrame)
        
    }

    //This uses our custom hook to repeat the doAnimation endlessly
    const [cancelAnimation, setStarted, onFrame] = useAnimFrame(moment.now(), doAnimation)




    return (
        <div className = 'controls'>
            <button onClick = {handlePause}>Pause</button>
            <button onClick = {handleStart}>Start</button>
            <button onClick={handleReload}>Random</button>
            <button>Custom</button>
        </div>
    );
}


export default Window;
