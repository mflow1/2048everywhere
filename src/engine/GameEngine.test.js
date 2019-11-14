import { GenerateTileArray } from './GameEngine'

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

