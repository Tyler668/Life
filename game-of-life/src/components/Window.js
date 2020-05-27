import React, { useRef, useState, useEffect } from 'react';
import { useAnimFrame } from '../utils/useAnimFrame.js'
import moment from 'moment'
import { drawBoard, render, nextGen } from '../utils/drawBoard.js';
// import { Board } from '../utils/drawBoard.js';

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
        render(grid)
        console.log(grid)
    })

    //Somewhere around here we'll be declaring rules and new generations, likely triggering nextgens in the doAnimation func

    const doAnimation = (elapsedTime) => {
        sleep(100)
        grid = nextGen(grid)
        render(grid)
    };


    console.log('Am I looping?')
    //This uses our custom hook to repeat the doAnimation endlessly
    const [cancelAnimationFrame] = useAnimFrame(moment.now(), doAnimation)

    return (<canvas id="canvas"  ref={canvasRef} width={props.width} height={props.height} />);
}


export default Window;
