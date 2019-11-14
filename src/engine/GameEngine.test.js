import { generateGameBoard } from './GameEngine'

let tileArray = null;

beforeEach(() => {
    tileArray = generateGameBoard(4,4);
});

afterEach(() => {
    tileArray = null;
});


it('GenerateArray makes a n x n Array when above 2x2', () => {
    var x = Math.floor(Math.random() * 9) + 2;
    var y = Math.floor(Math.random() * 9) + 2;
    var array = generateGameBoard(x,y);
    expect(array.length).toBe(x);
    expect(array[0].length).toBe(y);
});

it('GenerateArray throws when passed less and 2x2', () => {
    expect(() => {
        generateGameBoard(1,1);
    }).toThrow();
});

it('HasTileAbove returns false if the y coord is 0 and true otherwise', () => {

});

it('', () => {

});