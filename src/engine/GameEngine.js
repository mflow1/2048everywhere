export default class GameEngine {
    constructor(rowCount, columnCount) {
        this.gameState = {};
        this.gameMerges = {};
        this.generateGameState(rowCount, columnCount);
        this.gameState[0][0] = 2;
        this.gameState[3][0] = 2;
        //this.generateNewTile();
        //this.generateNewTile();
    } 

    generateGameState(rowCount, columnCount) {
        //We require a minimum of 2x2
        if (rowCount <= 1 || columnCount <= 1) {
            throw new Error('board must be a minimum of 2x2');
        }
    
        this.gameState = new Array(rowCount);
        this.gameMerges = new Array(rowCount);
        let row = 0;
        let column = 0;

        for (row = 0; row < this.gameState.length; row++) {
            this.gameState[row] = new Array(columnCount);
            this.gameMerges[row] = new Array(columnCount);
        }
    
        for (row = 0; row < this.gameState.length; row++) {
            for (column = 0; column < this.gameState[row].length; column++) {
                this.gameState[row][column] = 0;
                this.gameMerges[row][column] = false;
            }
        }
    }

    processUpCommand() {

        //For up we process left to right, then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                //We don't act upon top row
                if (row !== 0) {
                    for (let rowIt = row; rowIt > 0; rowIt--) {
                        //can we merge with piece above us or can we slide?
                        if ((this.gameState[rowIt][column] === this.gameState[rowIt-1][column] && (this.gameMerges[rowIt][column] === false && this.gameMerges[rowIt-1][column] === false))) {
                            //Assign game merges for that tile to true;
                            this.gameMerges[rowIt][column] = true;                            
                            //Assign game merges for that tile to true;
                            this.gameMerges[rowIt-1][column] = true;
                            //merge piece
                            this.gameState[rowIt-1][column] += this.gameState[rowIt][column];
                            //assign current piece to 0;
                            this.gameState[rowIt][column] = 0;
                        } else if (this.gameState[rowIt-1][column] === 0) {
                            //combine with 0
                            this.gameState[rowIt-1][column] += this.gameState[rowIt][column];
                            //assign current piece to 0;
                            this.gameState[rowIt][column] = 0;
                        }
                    }
                }
            }
        }

        //MERGE PIECES UP
        //For up we process left to right, then down
        // for (let row = 0; row < this.gameState.length; row++) {
        //     for (let column = 0; column < this.gameState[row].length; column++) {
        //         //We don't act upon top row
        //         if (row !== 0) {
        //             //can we merge with piece above us?
        //             if (this.gameState[row][column] === this.gameState[row-1][column]) {
        //                 //merge piece or combine with 0
        //                 this.gameState[row-1][column] += this.gameState[row][column];
        //                 //assign current piece to 0;
        //                 this.gameState[row][column] = 0;
        //             }
        //         }
        //     }
        // }

        // //SLIDE PIECES UP
        // //For up we process left to right, then down
        // for (let row = 0; row < this.gameState.length; row++) {
        //     for (let column = 0; column < this.gameState[row].length; column++) {
        //         if (this.gameState[row][column] === 0 && row !== this.gameState.length) {
        //             //Find furthest piece down and bring it up
        //             for (let nextRow = row+1; nextRow < this.gameState.length; nextRow++) {
        //                 if (this.gameState[nextRow][column] !== 0) {
        //                     //Piece found
        //                     this.gameState[row][column] = this.gameState[nextRow][column];

        //                     this.gameState[nextRow][column] = 0;
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }

        this.resetGameMerges();
        this.generateNewTile();
        console.log("Up Command");
    }

    processDownCommand() {
        //MERGE PIECES DOWN
        //for down we process left to right then up
        for (let row = this.gameState.length - 1; row > -1; row--) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                //We don't act upon bottom row
                if (row !== this.gameState.length-1) {
                    //can we merge with piece below us?
                    if (this.gameState[row][column] === this.gameState[row+1][column]) {
                        //merge piece or combine with 0
                        this.gameState[row+1][column] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }

        //SLIDE PIECES DOWN
        //for down we process left to right then up
        for (let row = this.gameState.length - 1; row > -1; row--) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                if (this.gameState[row][column] === 0 && row !== 0) {
                    //Find furthest piece up and bring it down
                    for (let nextRow = row-1; nextRow > -1; nextRow--) {
                        if (this.gameState[nextRow][column] !== 0) {
                            //Piece found
                            this.gameState[row][column] = this.gameState[nextRow][column];

                            this.gameState[nextRow][column] = 0;
                        }
                        break;
                    }
                }
            }
        }

        this.generateNewTile();
        console.log("Down Command");
    }

    processLeftCommand() {
        //MERGE PIECES LEFT
        //for left we process left to right then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                //We don't act upon left column
                if (column !== 0) {
                    //can we merge with piece left of us?
                    if (this.gameState[row][column] === this.gameState[row][column-1]) {
                        //merge piece or combine with 0
                        this.gameState[row][column-1] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }

        //SLIDE PIECES LEFT
        //for left we process left to right then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                if (this.gameState[row][column] === 0 && column !== this.gameState[row].length) {
                    //Find furthest piece right and bring it left
                    for (let nextColumn = column+1; nextColumn < this.gameState[row].length; nextColumn++) {
                        if (this.gameState[row][nextColumn] !== 0) {
                            //Piece found
                            this.gameState[row][column] = this.gameState[row][nextColumn];

                            this.gameState[row][nextColumn] = 0;
                            break;
                        }
                    }
                }
            }
        }

        this.generateNewTile();
        console.log("Left Command");
    }

    processRightCommand() {
        //MERGE PIECES RIGHT
        //for right we process right to left then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = this.gameState[row].length - 1; column > -1; column--) {
                //We don't act upon right column
                if (column !== this.gameState[row].length) {
                    //can we merge with piece right of us?
                    if (this.gameState[row][column] === this.gameState[row][column+1]) {
                        //merge piece or combine with 0
                        this.gameState[row][column+1] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }

        //SLIDE PIECES RIGHT
        //for right we process right to left then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = this.gameState[row].length - 1; column > -1; column--) {
                if (this.gameState[row][column] === 0 && column !== 0) {
                    //Find furthest piece left and bring it right
                    for (let nextColumn = column-1; nextColumn > -1; nextColumn--) {
                        if (this.gameState[row][nextColumn] !== 0) {
                            //Piece found
                            this.gameState[row][column] = this.gameState[row][nextColumn];

                            this.gameState[row][nextColumn] = 0;
                            break;
                        }
                    }
                }
            }
        }

        this.generateNewTile();
        console.log("Right Command");
    }

    generateNewTile() {
        let blankTiles = [];
        //For up we process left to right, then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                if (this.gameState[row][column] === 0) {
                    blankTiles.push({row: row, column: column});
                }
            }
        }

        console.log(blankTiles.length);

        if (blankTiles.length > 0){
            let randSelection = Math.floor(Math.random() * blankTiles.length); 
            this.gameState[blankTiles[randSelection].row][blankTiles[randSelection].column] = 2;
        } else {
            //LOSE
        }

    }

    resetGameMerges() {
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                this.gameMerges[row][column] = false;
            }
        }
    }
}
