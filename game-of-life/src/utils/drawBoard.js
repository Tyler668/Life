

var canvas = document.querySelector('canvas');
if (canvas.getContext) {
  var context = canvas.getContext('2d');
}

var resolution = 10

canvas.width = 800;
canvas.height = 800;

const columns = canvas.width / resolution;
const rows = canvas.height / resolution;

export function nextGen(grid) {
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

    }
  }
  // console.log('NEW GEN', newGen)
  return newGen
}


export function drawBoard() {
  let grid = new Array(columns).fill(null)
    .map(() => new Array(rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));

  //Populating board
  return grid
}

export function render(grid) {

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row]

      context.beginPath();
      context.rect(col * resolution, row * resolution, resolution, resolution);
      context.fillStyle = cell === 1 ? 'white' : 'black';
      // context.stroke();
      context.fill();
    }
  }
}

export function emptyGrid(){
  let grid = new Array(columns).fill(null)
  .map(() => new Array(rows).fill(0))

  // render(grid)

  return grid
}

export function customRender(grid, clickX, clickY){
  const customLayout = grid.map(former => [...former]);

  // console.log('Grid custom receives', grid)
  let relativeCellX = Math.floor(clickX / resolution)
  let relativeCellY = Math.floor(clickY / resolution)
  

  // let relevantCell = customLayout[relativeCellY][relativeCellX]
  console.log('Cell ', relativeCellX,',', relativeCellY)
  console.log('Relevant', customLayout[relativeCellX][relativeCellY])
  // if ( customLayout[relativeCellX][relativeCellY] === 0){customLayout[relativeCellX][relativeCellY] = 1} 
  // if ( customLayout[relativeCellX][relativeCellY] === 1){customLayout[relativeCellX][relativeCellY] = 0} 
  // customLayout[0][0] = 1
  // customLayout[3][10] = 1
  customLayout[relativeCellX][relativeCellY] = 1

    // for (let col = 0; col < customLayout.length; col++) {
    //   for (let row = 0; row < customLayout[col].length; row++) {
    //     // const cell = grid[col][row]
    //     if(customLayout[col] === relativeCellX && grid[col][row] === relativeCellY){

    //       customLayout[col][row] = 1
    //       // context.beginPath();
    //       // context.rect(col * resolution, row * resolution, resolution, resolution);
    //       // context.fillStyle = 'White'
    //     }
        
    //     // context.stroke();
    //     // context.fill();
    //   }
    // }

    // render(grid)
    
    console.log('Custom layout:', customLayout)
    return(customLayout)
}

