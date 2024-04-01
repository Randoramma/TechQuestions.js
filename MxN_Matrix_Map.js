// Write an algorithm such that if an element in an MxN  matrix is 0, it's entire row and column are set to 0.

// this will be solved in a 2 step approach.. first to set each row and column to a stored list to be 
// zeroed out later.. Second, to update those stored rows and columns  to "0" 


let matrix = [ 
    [1,2,3],
    [4,0,6],
    [7,8,9]
]; 

let zeroMatrix = [
    [0, 0],
    [0, 0]
  ];

  let noZeroMatrix = [
    [1, 2],
    [3, 4]
  ];

  let multipleZerosMatrix = [
    [0, 2, 3],
    [4, 5, 6],
    [7, 0, 9]
  ];

  let largeMatrixSingleZero = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 0, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  let firstRowColZeroMatrix = [
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let lastRowColZeroMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ];

  let singleRowMatrix = [
    [1, 0, 3]
  ];

  let singleColumnMatrix = [
    [1],
    [0],
    [3]
  ];

function zeroMatrixRowAndColumn(matrix){ 
    let rowToZero = new Set(); 
    let columnToZero = new Set(); 

    for (let i = 0; i < matrix.length; i++) { 
        for (let j = 0; j < matrix[i].length; j++) { 
            if (matrix[i][j] === 0) { 
                rowToZero.add(i); 
                columnToZero.add(j); 
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) { 
        for(let j = 0; j < matrix[i].length; j++) { 
            if (rowToZero.has(i) || columnToZero.has(j)){ 
                matrix[i][j] = 0; 
            }
        }
    }
}


function setZero(matrix) { 
    // create storage row set and column set 
    let rowToZero = new Set(); 
    let columnToZero = new Set(); 

    // loop through rows 
    for (i = 0; i < matrix.length; i++){ 
        // loop through column for that row to examine each indice 
        for (j = 0; j < matrix[i].length; j++) { 
            // if element is "0" save row and column.  
            if (matrix[i][j] === 0) { 
                rowToZero.add(i);
                columnToZero.add(j);
            }
        }
    }
     // loop through each element again (nested for loop) 
     for (i = 0; i < matrix.length; i++){ 
        // loop through column for that row to examine each indice 
        for (j = 0; j < matrix[i].length; j++) { 
            //and if the row or column for that eleemnt is "0",
            if (rowToZero.has(i) || columnToZero.has(j)) { 
                // zero out that element.  
                matrix[i][j] = 0; 
            }
        }
    }
  }



function testZeroMatrixRowAndColumn(testMatrices) {
    testMatrices.forEach((matrix, index) => {
      console.log(`Testing Matrix #${index + 1}:`);
      console.log('Original matrix:');
      console.log(matrix.map(row => row.join(' ')).join('\n'));
  
      setZero(matrix);
  
      console.log('Modified matrix:');
      console.log(matrix.map(row => row.join(' ')).join('\n'));
      console.log('----------');
    });
  }
  
  const testMatrices = [ 
    matrix, 
    zeroMatrix, 
    noZeroMatrix,
    multipleZerosMatrix,
    largeMatrixSingleZero,
    firstRowColZeroMatrix, 
    lastRowColZeroMatrix, 
    singleRowMatrix, 
    singleColumnMatrix
]; 

  testZeroMatrixRowAndColumn(testMatrices);