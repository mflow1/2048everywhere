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
        for (let row = 0; row < this.gameState.length; row++) {
            for (let column = 0; column < this.gameState[row].length; column++) {
                this.gameState[row][column]++;
            }
        }
        
        console.log("Up Command");
    }

    processDownCommand() {
        console.log("Down Command");
    }

    processLeftCommand() {
        console.log("Left Command");
    }

    processRightCommand() {
        console.log("Right Command");
    }
}
