// let prevTimeStamp = null

// function onAnimFrame(timestamp){
//     //Request the next animation frame
//     requestAnimationFrame(onAnimFrame);


//     //If we haven't stored the previous frame, fake one
//     if (prevTimeStamp === null){
//         prevTimeStamp = timestamp - 30
//     }


//     //Compute how long it took between frames
//     const elapsed = timestamp - prevTimeStamp

//     //Recall this info for next frame
//     prevTimeStamp = timestamp

//     // console.log(`Current time: ${(timestamp/1000).toFixed(4)} s, Frame Time: ${elapsed.toFixed(2)} ms`);
// }

// //Request the first animation frame to kick things off

// requestAnimationFrame(onAnimFrame)