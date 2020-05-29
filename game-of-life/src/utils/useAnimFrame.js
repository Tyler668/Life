import React, { useEffect, useState, useCallback, useRef } from 'react'

//Custom hook for using animation frame

function sleep(milliseconds) { //Slow the roll
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export const useAnimFrame = (timestamp, doAnimCB) => {
    const [prevTimeStamp, setPrevTimeStamp] = useState(timestamp - 30);
    const continueAnimation = useRef();
    const [started, setStarted] = useState(false)
    const slowTime = useRef(false)
    const generation = useRef(0)


    //Request the first frame to kick things off
    const onFrame = useCallback((timestamp) => {
        if(continueAnimation.current){
            generation.current++
            if(slowTime.current){
                sleep(400)
            }
            // console.log('continueanimation',continueAnimation)
            requestAnimationFrame(onFrame);
            console.log('Generation:', generation.current)
            const elapsed = prevTimeStamp - timestamp;
            doAnimCB(elapsed);
        }}, [continueAnimation])



    //This will stop the hook from calling the next animation frame
    const cancelAnimation = () => {
        continueAnimation.current = false;
    };

    return [cancelAnimation, setStarted, onFrame, continueAnimation, slowTime, generation];
};