import { GenerateTileArray, HasTileAbove } from './GameEngine'

let tileArray = null;

beforeEach(() => {
    tileArray = GenerateTileArray(4,4);
});

afterEach(() => {
    tileArray = null;
});


it('GenerateArray makes a n x n Array when above 2x2', () => {
    var x = Math.floor(Math.random() * 9) + 2;
    var y = Math.floor(Math.random() * 9) + 2;
    var array = GenerateTileArray(x,y);
    expect(array.length).toBe(x);
    expect(array[0].length).toBe(y);
});

it('GenerateArray throws when passed less and 2x2', () => {
    expect(() => {
        GenerateTileArray(1,1);
    }).toThrow();
});

it('HasTileAbove returns false if the y coord is 0 and true otherwise', () => {
    expect(HasTileAbove(tileArray, 0, 0)).toBe(false);
    expect(HasTileAbove(tileArray, 0, 1)).toBe(true);
});

it('', () => {

});