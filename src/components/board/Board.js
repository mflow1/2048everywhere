import React from 'react';
import './Board.css';
import Tile from '../tile/Tile';

function Board() {
    var tileArray = new Array(4);

    for (var i = 0; i < tileArray.length; i++) {
        tileArray[i] = new Array(4);
    }

    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            tileArray[x][y] = <Tile/>;
        }
    }
    
    return <div className="Board"> 
        <div> {tileArray[0][0]} {tileArray[1][0]} {tileArray[2][0]} {tileArray[3][0]}</div>
        <div> {tileArray[0][1]} {tileArray[1][1]} {tileArray[2][1]} {tileArray[3][1]}</div>
        <div> {tileArray[0][2]} {tileArray[1][2]} {tileArray[2][2]} {tileArray[3][2]}</div>
        <div> {tileArray[0][3]} {tileArray[1][3]} {tileArray[2][3]} {tileArray[3][3]}</div>
    </div>

}

export default Board;