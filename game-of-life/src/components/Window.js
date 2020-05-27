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
    console.log('CANVASREF', canvasRef)

    // let grid = drawBoard()
    // function update(grid) {
    //     // grid = nextGen(grid)
    //     // render(grid)
    //     // requestAnimationFrame(update(grid))
    // }

    let grid;

    useEffect(() => {
        grid = drawBoard()
        render(grid)
        console.log(grid)
        //   requestAnimationFrame(update(grid))
        //   console.log(grid)
        //   nextGen(grid)
        // doAnimation(grid)
    })


    //Somewhere around here we'll be declaring rules and new generations, likely triggering nextgens in the doAnimation func

    // let grid = drawBoard()
    // render(grid)
    const doAnimation = (elapsedTime) => {
        // var canvas = canvasRef.current
        // // console.log('WIDTH:',canvas.style.width)
        // if (canvas.getContext) {
        //     var context = canvas.getContext('2d');
        // }

        // var resolution = 10

        // canvas.width = 800;
        // canvas.height = 800;

        // // Define cols and rows based on board size and res
        // const columns = canvas.width / resolution;
        // const rows = canvas.height / resolution;
        // --------------------------------------------------------
        
        // grid = drawBoard()
        // render(grid)
        // console.log(grid)
        // console.log(nextGen(grid))
        grid = nextGen(grid)
        render(grid)
        // render(grid)

        // console.log('GRID',grid)

    };



    console.log('Am I looping?')
    //This uses our custom hook to repeat the doAnimation endlessly
    const [cancelAnimationFrame] = useAnimFrame(moment.now(), doAnimation)

    return (<canvas id="canvas" style={{ margin: '20px', border: '1px solid black' }} ref={canvasRef} width={props.width} height={props.height} />);
    // return <div style = {{height: '100px', width: '100px', border: '1px solid black'}}>Epic</div>
}

// setInterval(Window.doAnimation, 1);


// this.draw()

export default Window;
