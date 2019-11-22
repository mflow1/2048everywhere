import { generateGameState, GameEngine } from './GameEngine'

let tileArray = null;

beforeEach(() => {
    tileArray = generateGameState(4,4);
});

afterEach(() => {
    tileArray = null;
});

describe('GameEngineTests', () => {
    describe('Constructor tests', ()=> {
        it('constructor makes a n x n Array when above 2x2', () => {
            let x = Math.floor(Math.random() * 9) + 2;
            let y = Math.floor(Math.random() * 9) + 2;

            let gameEngine = new GameEngine(x, y);
            let array = gameEngine.gameState;
            
            expect(array.length).toBe(x);
            expect(array[0].length).toBe(y);
        });
    
        it('GameEngine constructor throws when passed less and 2x2', () => {
            expect(() => {
                let gameEngine = new GameEngine(1,1);
            }).toThrow();
        });
    });
});