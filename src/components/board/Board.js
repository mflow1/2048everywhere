import React from 'react';
import './Board.css';
import Tile from '../tile/Tile'
import { generateGameBoard } from '../../engine/GameEngine'

export default function Board(props) {
    let tileArray = generateTileArrayFromGameBoard(generateGameBoard(4,4));

    if(props.x > 1 && props.y > 1) {
        tileArray = generateGameBoard(props.x,props.y);
    }

    const items = []
    let rowItems = []

    for (let x = 0; x < tileArray.length; x++) {
        for (let y = 0; y < tileArray[0].length; y++) {
            rowItems.push(tileArray[x][y]);
        }
        items.push(<div key={x}>{rowItems}</div>)
        rowItems = [];
    }

    return <div className="Board">{items}</div>
}

function generateTileArrayFromGameBoard(board) {
    let tileArray = new Array(board.length);

    for (var i = 0; i < board.length; i++) {
        tileArray[i] = new Array(board[0].length);
    }

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[0].length; y++) {
            tileArray[x][y] = <Tile key={x.toString() + ' ' + y.toString()} tileValue={board[x][y]}/>;
        }
    }
    return tileArray;
}