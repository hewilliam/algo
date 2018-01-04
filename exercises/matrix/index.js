// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    for(let i =0; i < n; i++) {
        results.push([]);
    }
    //console.log matrix(2) --> [[], []]

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1; //n - 1 because it depends on the size of matrix and indexing arrays is always start at 0
    let startRow = 0;
    let endRow = n - 1;

    while(startColumn <= endColumn && startRow <= endRow) {
        //top row
        for(let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++
        }
        startRow++
        
        //right column
        for(let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++
        }
        endColumn--

        //bottom row
        for(let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++
        }
        endRow--

        //start column

        for(let i = endRow; i>= startRow; i--) {
            results[i][startColumn] = counter;
            counter++
        }
        startColumn++
    }
    return results
}

console.log(matrix(10))

module.exports = matrix;
