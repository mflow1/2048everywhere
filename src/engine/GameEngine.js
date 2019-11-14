import React from 'react';
import Tile from '../components/tile/Tile';

export function GenerateTileArray(x,y) {
    //We require a minimum of 2x2
    if (x <= 1 || y <= 1) {
        throw new Error('TileArray must be a minimum of 2x2');
    }

    var tileArray = new Array(x);

    for (var i = 0; i < tileArray.length; i++) {
        tileArray[i] = new Array(y);
    }

    for (i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            tileArray[i][j] = <Tile/>;
        }
    }

    return tileArray;
}