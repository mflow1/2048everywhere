export class GameEngine {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.gameState = this.generateGameState();
    } 

    generateGameState() {
        let x = this.height;
        let y = this.width;

        //We require a minimum of 2x2
        if (x <= 1 || y <= 1) {
            throw new Error('board must be a minimum of 2x2');
        }
    
        let gameState = new Array(x);
    
        for (var i = 0; i < gameState.length; i++) {
            gameState[i] = new Array(y);
        }
    
        for (i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                gameState[i][j] = 2;
            }
        }
    
        return gameState;
    }
}
