import React from 'react';
import './Board.css';
import Tile from '../tile/Tile'

export default function Board(props) {
    return <div className="Board">{generateOutputJSXFromTileArray(generateTileArrayFromGameState(props.gameState))}</div>
}

function generateTileArrayFromGameState(gameState) {
    let tileArray = new Array(gameState.length);

    let row = 0;
    let column = 0;

    for (row = 0; row < gameState.length; row++) {
        tileArray[row] = new Array(gameState[0].length);
    }

    for (row = 0; row < gameState.length; row++) {
        for (column = 0; column < gameState[row].length; column++) {
            tileArray[row][column] = <Tile key={row.toString() + ' ' + column.toString()} tileValue={gameState[row][column]}/>;
        }
    }
    
    return tileArray;
}

function generateOutputJSXFromTileArray(tileArray) {
    let items = [];
    let rowItems = [];

    for (let row = 0; row < tileArray.length; row++) {
        for (let column = 0; column < tileArray[row].length; column++) {
            rowItems.push(tileArray[row][column]);
        }
        items.push(<div key={row}>{rowItems}</div>)
        rowItems = [];
    }

    return items;
}