/**
 * This program is a boliler plate code for the famous tic tac toe game
 * Here box represents one placeholder for either X or a 0
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 * 
 * Below are the tasks which needs to be completed
 * Imagine you are playing with Computer so every alternate move should be by Computer
 * X -> player
 * O -> Computer
 * 
 * Winner has to be decided and has to be flashed
 * 
 * Extra points will be given for the Creativity
 * 
 * Use of Google is not encouraged
 * 
 */
const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    console.log('colid',+colIdx);
    let rowDivs = '';
    //localStorage.setItem('tic_tac', '1');
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        console.log('sum',sum);
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        console.log('gridvalue'+turn);
        if(gridValue == 1) {
//if (turn == 'X'){
            localStorage.setItem('tic_tac', '2');
            //turn = 'O';
            content = '<span class="cross">X</span>';
            //additionalClass+= ' x';
        }
        else if (gridValue == 2) {
           // else if (turn == 'O'){
                //turn = 'X';
            localStorage.setItem('tic_tac', '1');
            content = '<span class="cross">O</span>';
            //additionalClass+= ' o';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    console.log('parent',+parent);
    const columnDivs = getColumns();
    console.log('parent',+columnDivs);
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    var getNewValue = localStorage.getItem('tic_tac');
    console.log('yuavn'+getNewValue);
    let newValue = getNewValue;

    grid[colIdx][rowIdx] = newValue;

    renderMainGrid();
    addClickHandlers();
    successAlert();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

function successAlert(){

    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
          
        if($('div.box[rowidx="'+rowIdx+'"]').find('span').text() == 'X'.repeat(GRID_LENGTH)) {
        alert ('X Wins');
        } else if($('div.box[rowidx="'+rowIdx+'"]').find('span').text() == 'O'.repeat(GRID_LENGTH)) {
alert ('O wins');
        }

    
    }



    for(let colIdx=0; colIdx < GRID_LENGTH ; colIdx++ ) {
        if($('div.box[colidx="'+colIdx+'"]').find('span').text() == 'X'.repeat(GRID_LENGTH)) {
            alert ('X Wins');
        } else if($('div.box[colidx="'+colIdx+'"]').find('span').text() == 'O'.repeat(GRID_LENGTH)) {
            alert ('O wins');

        }
        
       
    }  

    for(let colIdx=0; colIdx < GRID_LENGTH ; colIdx++ ) {
        if($('div.box[rowidx="'+colIdx+'"][colidx="'+colIdx+'"]').find('span').text() == 'X'.repeat(GRID_LENGTH)) {
            alert ('X Wins');
        } else if($('div.box[rowidx="'+colIdx+'"][colidx="'+colIdx+'"]').find('span').text() == 'O'.repeat(GRID_LENGTH)) {
            alert ('O wins');

        }
        
       
    }  
}

initializeGrid();
renderMainGrid();
addClickHandlers();
