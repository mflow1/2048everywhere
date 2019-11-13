import GameEngine, { GenerateTileArray } from './GameEngine'

it('GenerateArray makes a 4x4 Array', () => {
    var array = GenerateTileArray();
    expect(array.length).toBe(4);
    expect(array[0].length).toBe(4);
});