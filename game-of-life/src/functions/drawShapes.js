function draw() {
    let canvas = document.getElementById('display-canvas');
    let ctx = canvas.getContext('2d');

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Here is the screen buffer array we can manipulate:

    let screenBuffer = imageData.data;
    console.log('SCREEN BUFFER DATA:', screenBuffer)
}