import React from 'react';
import './Board.css';
import Tile from '../tile/Tile'

export default function Board(props) {
    return <div className="Board">{generateOutputJSXFromTileArray(generateTileArrayFromGameState(props.gameState))}</div>
}

function generateTileArrayFromGameState(gameState) {
    let tileArray = new Array(gameState.length);

    for (var i = 0; i < gameState.length; i++) {
        tileArray[i] = new Array(gameState[0].length);
    }

    for (let x = 0; x < gameState.length; x++) {
        for (let y = 0; y < gameState[0].length; y++) {
            tileArray[x][y] = <Tile key={x.toString() + ' ' + y.toString()} tileValue={gameState[x][y]}/>;
        }
    }
    
    return tileArray;
}

function generateOutputJSXFromTileArray(tileArray) {
    let items = []
    let rowItems = []
    console.log(tileArray);

    for (let x = 0; x < tileArray.length; x++) {
        for (let y = 0; y < tileArray[0].length; y++) {
            rowItems.push(tileArray[x][y]);
        }
        items.push(<div key={x}>{rowItems}</div>)
        rowItems = [];
    }

    return items;
}