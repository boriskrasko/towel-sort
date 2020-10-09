module.exports = function towelSort (matrix) {

if ( !Array.isArray(matrix) || (matrix.length == 0) ) return ([]);
let arrayFromMatrix = []; 

    for (i = 0; i < matrix.length; i++)
      if (i % 2) { 
      	arrayFromMatrix = arrayFromMatrix.concat( matrix[i].reverse() ); 
      } else { 
      	arrayFromMatrix = arrayFromMatrix.concat(matrix[i]); 
      }

  return arrayFromMatrix;
}
  
  



