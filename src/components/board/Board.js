import React from 'react';
import './Board.css';
import Tile from '../tile/Tile';

function Board(x, y) {
    if (x > 0 || y > 0) {
        return <Tile/>
    } else {
        //use a default of 4x4
        return <Tile/>
    }
}

export default Board;