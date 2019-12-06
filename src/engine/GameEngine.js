export default class GameEngine {
    constructor(rowCount, columnCount) {
        this.gameState = this.generateGameState(rowCount, columnCount);
    } 

    generateGameState(rowCount, columnCount) {
        //We require a minimum of 2x2
        if (rowCount <= 1 || columnCount <= 1) {
            throw new Error('board must be a minimum of 2x2');
        }
    
        let gameState = new Array(rowCount);
        let row = 0;
        let column = 0;

        for (row = 0; row < gameState.length; row++) {
            gameState[row] = new Array(columnCount);
        }
    
        for (row = 0; row < gameState.length; row++) {
            for (column = 0; column < gameState[row].length; column++) {
                gameState[row][column] = 2;
            }
        }
    
        return gameState;
    }

    processUpCommand() {
        //For up we process left to right, then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                //We don't act upon top row
                if (row !== 0) {
                    //can we merge with piece above us?
                    if (this.gameState[row][column] === this.gameState[row-1][column] || this.gameState[row-1][column] === 0) {
                        //merge piece or combine with 0
                        this.gameState[row-1][column] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }

        console.log("Up Command");
    }

    processDownCommand() {
        //for down we process left to right then up
        for (let row = this.gameState.length - 1; row > -1; row--) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                //We don't act upon bottom row
                if (row !== this.gameState.length-1) {
                    //can we merge with piece below us?
                    if (this.gameState[row][column] === this.gameState[row+1][column] || this.gameState[row+1][column] === 0) {
                        //merge piece or combine with 0
                        this.gameState[row+1][column] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }
        console.log("Down Command");
    }

    processLeftCommand() {
        //for left we process left to right then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                //We don't act upon left column
                if (column !== 0) {
                    //can we merge with piece left of us?
                    if (this.gameState[row][column] === this.gameState[row][column-1] || this.gameState[row][column-1] === 0) {
                        //merge piece or combine with 0
                        this.gameState[row][column-1] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }
        console.log("Left Command");
    }

    processRightCommand() {
        //for right we process right to left then down
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = this.gameState[row].length - 1; column > -1; column--) {
                //We don't act upon right column
                if (column !== this.gameState[row].length) {
                    //can we merge with piece right of us?
                    if (this.gameState[row][column] === this.gameState[row][column+1] || this.gameState[row][column+1] === 0) {
                        //merge piece or combine with 0
                        this.gameState[row][column+1] += this.gameState[row][column];
                        //assign current piece to 0;
                        this.gameState[row][column] = 0;
                    }
                }
            }
        }
        console.log("Right Command");
    }
}
