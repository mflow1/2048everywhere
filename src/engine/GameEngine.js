import React from 'react';
import Tile from '../components/tile/Tile';

export function GenerateTileArray() {
    var tileArray = new Array(4);

    for (var i = 0; i < tileArray.length; i++) {
        tileArray[i] = new Array(4);
    }

    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            tileArray[x][y] = <Tile/>;
        }
    }

    return tileArray;
}