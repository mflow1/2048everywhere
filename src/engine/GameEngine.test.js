import GameEngine from './GameEngine'

describe('GameEngineTests', () => {
    describe('Constructor tests', ()=> {
        it('constructor makes a n x n Array when above 2x2', () => {
            let rowCount = Math.floor(Math.random() * 9) + 2;
            let columnCount = Math.floor(Math.random() * 9) + 2;

            let gameEngine = new GameEngine(rowCount, columnCount);
            let array = gameEngine.gameState;
            
            expect(array.length).toBe(rowCount);
            for (let row = 0; row < array.length; row++) {
                expect(array[row].length).toBe(columnCount);
            }
        });
    
        it('GameEngine constructor throws when passed less and 2x2', () => {
            expect(() => {
                let gameEngine = new GameEngine(1,1);
            }).toThrow();
        });
    });
});