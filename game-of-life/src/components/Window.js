import React, { useRef, useState } from 'react';
import { useAnimFrame } from '../utils/useAnimFrame.js'
import moment from 'moment'

export const Window = (props) => {
    const canvasRef = useRef(null)
    const [stopAnimation, setStopAnimation] = useState(false);

    const doAnimation = (elapsedTime) => {
        // console.log('Elapsed Time:', elapsedTime);
        // console.log(canvasRef.current);
    };

    const [cancelAnimationFrame] = useAnimFrame(moment.now(), doAnimation)

    return (<canvas id="canvas" style={{margin: '50px', width: '500px', borderRight: '1px solid black', borderBottom: '1px solid gray' }} ref={canvasRef} width={props.width} height={props.height} />);
    // return <div style = {{height: '100px', width: '100px', border: '1px solid black'}}>Epic</div>
}



// this.draw()
