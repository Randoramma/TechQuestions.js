//Given an image represented by NxN matrix, where each pixel in the images 4 bites, write a method to rotate the image by 90°. Can you do this in place?
// matrix [i][j]


// var myMatrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]; 

let myMatrix = [
    [0b1010, 0b0110, 0b1100],
    [0b1111, 0b0101, 0b0001],
    [0b1000, 0b0010, 0b1011]
];

// js rotation function 

function rotateMatrixInPlace(matrix) { 
    // capture int representing the size of each row 
    let rowCount = matrix.length;  
    // loop through each row
    for (let i = 0; i < rowCount; i++) { 
        // loop through each column starting with the current row to max    
        for (let j = i; j < rowCount; j++) { 
            // directly swap each row and column as iterating through.. 
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; 
        }
        // reverse the rows order to complete a 90º rotation.  
        for (let i = 0; i < rowCount; i++) { 
            matrix[i].reverse(); 
        }
    }
}

console.log("Original Matrix:");
console.log(myMatrix);

rotateMatrixInPlace(myMatrix);

console.log("Matrix after 90-degree clockwise rotation:");
console.log(myMatrix);

rotateMatrixInPlace(myMatrix);
rotateMatrixInPlace(myMatrix);
rotateMatrixInPlace(myMatrix);

console.log("Matrix after 360-degree clockwise rotation:");
console.log(myMatrix);