


export function nextGen(grid) {
  var canvas = document.querySelector('canvas');
  // console.log('WIDTH:',canvas.style.width)
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
  }

  var resolution = 10

  canvas.width = 800;
  canvas.height = 800;

  // Define cols and rows based on board size and res
  const columns = canvas.width / resolution;
  const rows = canvas.height / resolution;

  const newGen = grid.map(former => [...former]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let neighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const xcell = col + i;
          const ycell = row + j;

          if(xcell >= 0 && ycell >= 0 && xcell < columns && ycell < rows){
            const neighbor = grid[col + i][row + j];
            neighbors += neighbor;
          }
        }
      }

      //Rules of survival
      if (cell === 1 && neighbors < 2) {
        newGen[col][row] = 0
      }
      else if (cell === 1 && neighbors > 3) {
        newGen[col][row] = 0
      }
      else if (cell === 0 && neighbors === 3) {
        newGen[col][row] = 1
      }
      // else if (cell === 0 && neighbors === 3) {
      //   newGen[col][row] = 1
      // }

    }
  }
  console.log('NEW GEN', newGen)
  return newGen
}


export function drawBoard() {
  var canvas = document.querySelector('canvas');
  // console.log('WIDTH:',canvas.style.width)
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
  }

  var resolution = 10

  canvas.width = 800;
  canvas.height = 800;

  // Define cols and rows based on board size and res
  const columns = canvas.width / resolution;
  const rows = canvas.height / resolution;

  let grid = new Array(columns).fill(null)
    .map(() => new Array(rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));





  //Populating board


  return grid
}

export function render(grid) {
  var canvas = document.querySelector('canvas');
  // console.log('WIDTH:',canvas.style.width)
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
  }
  
  var resolution = 10
  
  canvas.width = 800;
  canvas.height = 800;
  
  const columns = canvas.width / resolution;
  const rows = canvas.height / resolution;


  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row]

      context.beginPath();
      context.rect(col * resolution, row * resolution, resolution, resolution);
      context.fillStyle = cell === 1 ? 'white' : 'black';
      context.stroke()
      context.fill();
    }
  }
}


// let grid = drawBoard()

// function update(){
//   grid = 
// }









  // var resolution = 10

  // canvas.width = 800;
  // canvas.height = 800;

  // // Define cols and rows based on board size and res
  // const columns = canvas.width / resolution;
  // const rows = canvas.height / resolution;

  // return new Array(columns).fill(null)
  //   .map(() => new Array(rows).fill(0));