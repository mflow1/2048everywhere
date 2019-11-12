import React from 'react';
import './Board.css';
import Tile from '../tile/Tile';

function Board(x, y) {
    if (x > 0 || y > 0) {
        //implement custom sizes of boards here.
    } else {
        //use a default of 4x4
        return <div className="Board"> 
            <div> <Tile/> <Tile/> <Tile/> <Tile/> </div>
            <div> <Tile/> <Tile/> <Tile/> <Tile/> </div>
            <div> <Tile/> <Tile/> <Tile/> <Tile/> </div>
            <div> <Tile/> <Tile/> <Tile/> <Tile/> </div>
        </div>
    }
}

export default Board;