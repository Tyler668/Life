import React, { useEffect, useState } from 'react'

//Custom hook for using animation frame
export const useAnimFrame = (timestamp, doAnimCB) => {
    const [prevTimeStamp, setPrevTimeStamp] = useState(timestamp - 30);
    const [continueAnimation, setContinueAnimation] = useState(true);
    const [started, setStarted] = useState(false)


    useEffect(() => {
        //Only start the animation frame if we haven't in the past 
        if (!started) {
            setStarted(true);
            requestAnimationFrame(onFrame)
        }

    }, [started]);

    //Request the first frame to kick things off
    const onFrame = (timestamp) => {
        if (continueAnimation) {
            requestAnimationFrame(onFrame);
        }

        const elapsed = prevTimeStamp - timestamp;
        // console.log(`Current time: ${(timestamp / 1000).toFixed(4)} s, Frame Time: ${elapsed.toFixed(2)} ms`);

        doAnimCB(elapsed);
    };

    //This will stop the hook from calling the next animation frame
    const cancelAnimation = () => {
        setContinueAnimation(false);
    };

    return [cancelAnimation];
};