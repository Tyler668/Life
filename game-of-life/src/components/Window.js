import React, { useRef, useState } from 'react';
import { useAnimFrame } from '../utils/useAnimFrame.js'
import moment from 'moment'

export const Window = (props) => {
    const canvasRef = useRef(null);
    const [stopAnimation, setStopAnimation] = useState(false);

    let x = 0
    let y = 0
    let end = false

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    //Somewhere around here we'll be declaring rules and new generations, likely triggering nextgens in the doAnimation func

    const doAnimation = (elapsedTime) => {
        // console.log('Elapsed Time:', elapsedTime / 100000000000, 's');
        // console.log(canvasRef.current);
        const canvas = canvasRef.current; // refers to the ref attribute in render()
        const context = canvas.getContext('2d'); // etc.

        // while (x <= canvas.width && y <= canvas.height) {

      
            if (x === canvas.width - 20) { end = true }
            else if (x === 0) { end = false }
            
            sleep(80)
            if (end === false) {
                
                context.fillStyle = 'white'
                context.fillRect(x + 1, y + 1, 19, 19)
                x += 20
                y += 20
                context.fillStyle = 'black'
                context.fillRect(x + 1, y + 1, 19, 19);
            }
    
            if (end === true) {
                context.fillStyle = 'white'
                context.fillRect(x + 1, y + 1, 19, 19)
                x -= 20
                y -= 20
                context.fillStyle = 'black'
                context.fillRect(x + 1, y + 1, 19, 19);
            }
    
            // console.log('Am I looping?')

        
        // }
    };



    console.log('Am I looping?')
    //This uses our custom hook to repeat the doAnimation endlessly
    const [cancelAnimationFrame] = useAnimFrame(moment.now(), doAnimation)

    return (<canvas id="canvas" style={{ margin: '20px', width: '500px', borderRight: '1px solid black', borderBottom: '1px solid gray' }} ref={canvasRef} width={props.width} height={props.height} />);
    // return <div style = {{height: '100px', width: '100px', border: '1px solid black'}}>Epic</div>
}

setInterval(Window.doAnimation, 1);

// this.draw()
