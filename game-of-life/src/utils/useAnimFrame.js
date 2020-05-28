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
    

    // useEffect(() => {
    //     //Only start the animation frame if we haven't in the past 
    //     if (!started) {
    //         setStarted(true);
    //         requestAnimationFrame(onFrame)
    //     }

    // }, [started]);

    //Request the first frame to kick things off
    const onFrame = useCallback((timestamp) => {
        if(continueAnimation.current){
            if(slowTime.current){
                sleep(500)
            }
            console.log('continueanimation',continueAnimation)
            requestAnimationFrame(onFrame);
            const elapsed = prevTimeStamp - timestamp;
            doAnimCB(elapsed);
        }}, [continueAnimation])
    
        // else {
        //    return
        // }


    //This will stop the hook from calling the next animation frame
    const cancelAnimation = () => {
        continueAnimation.current = false;
    };

    return [cancelAnimation, setStarted, onFrame, continueAnimation, slowTime];
};