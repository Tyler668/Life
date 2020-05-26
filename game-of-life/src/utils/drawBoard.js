export function drawBoard() {
    var canvas = document.getElementById('canvas');
    // console.log('WIDTH:',canvas.style.width)
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
    }

    var bw = 500;
    // Box height
    var bh = 500;
    // Padding
    var p = 0;

    for (var x = 0; x <= bw; x += 20) {
      context.moveTo(0.5 + x + p, p);
      context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 20) {
      context.moveTo(p, 0.5 + x + p);
      context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();


    
    
  }