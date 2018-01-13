let string = '835416927296857431417293658569134782123678549748529163652781394981345276374962815'

var checker = ( function (){

    var bigRow
    var bigCols 
    var bigGrid

    // change the data to reorganized data;
    start = function(data){
        reorganizeData(data);
        return this;
    };
    
    // check if sudoku is valid
    isValid = function(){
        return (validate(bigRows) && validate(bigCols) && validate(bigGrid));
    };

    // validate the row, changed column data, and overall grid 
    validate = function(data){
        for (var row = 0; row < 9; row++) {

            data[row].sort();
            
            for (var col = 0; col < 9; col++) {

                var value = data[row][col], next_value = data[row][col + 1];

                // check if value exists and is a valid number
                if (!(value && value > 0 && value < 10)){
                    return false;
                }

                // check if numbers are unique
                if (col !== 8 && value === next_value){
                    return false;
                }

            }
        }
        return true;
    };

    // reorganize data into "new rows"
    reorganizeData = function(data){
        bigRows = data;
        bigCols = [];
        bigGrid = [];

        for (var i = 0; i < 9; i++) {
            bigCols.push([]);
            bigGrid.push([]);
        }
        
        for (var row = 0; row < 9; row++) {

            for (var col = 0; col < 9; col++) {

                // Save each column in a new row
                bigCols[col][row] = data[row][col];

                // Calculate grid identifiers
                gridRow = Math.floor( row / 3 );
                gridCol = Math.floor( col / 3 );
                gridIndex = gridRow * 3 + gridCol;

                // Save each grid in a new row
                bigGrid[gridIndex].push(data[row][col]);
                
            }
        }

    };
 
    //return the methods
    return {
        start: start,
        isValid: isValid
    };
})();


function createRows (string) {
  let array = [];
  let index = 0;
  for(let i = 0; i < 9; i++) {
    let subArray = [];
    for(let j = index; j < index+9; j++) {
      subArray.push(string[j])
    }
    index= index+ 9;
    array.push(subArray)
  }
  return array
}

checker.start(createRows(string)).isValid();