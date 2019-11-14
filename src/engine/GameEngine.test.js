import GameEngine, { GenerateTileArray } from './GameEngine'

it('GenerateArray makes a n x n Array', () => {
    var x = Math.floor(Math.random() * 11);
    var y = Math.floor(Math.random() * 11);
    var array = GenerateTileArray(x,y);
    expect(array.length).toBe(x);
    expect(array[0].length).toBe(y);
});

