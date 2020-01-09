import React from 'react';
import './Board.css';
import Tile from '../tile/Tile'

export default function Board(props) {
    return fillGridWithTiles(props.gameState); 
    //<div className="Board">{generateOutputJSXFromTileArray(generateTileArrayFromGameState(props.gameState))}</div>
}

function fillGridWithTiles(gameState) {
    let grid = [];
    for(let i = 0; i < 16; i++)
        grid.push(0);

    for(let i = 0; i < gameState.length; i++) {
        let position = gameState[i].pos;
        let tileValue = gameState[i].val;
        grid[position] = tileValue;
    }  

    return <div className="Board">
            <div className="row-zero">
                <Tile tileValue={grid[0]}/> <Tile tileValue={grid[2]}/> <Tile tileValue={grid[3]}/> <Tile tileValue={grid[4]}/>
            </div>
            <div className="row-one">
                <Tile tileValue={grid[5]}/> <Tile tileValue={grid[6]}/> <Tile tileValue={grid[7]}/> <Tile tileValue={grid[8]}/>    
            </div>
            <div className="row-two">
                <Tile tileValue={grid[9]}/> <Tile tileValue={grid[10]}/> <Tile tileValue={grid[11]}/> <Tile tileValue={grid[12]}/>      
            </div>
            <div className="row-three">
                <Tile tileValue={grid[13]}/> <Tile tileValue={grid[14]}/> <Tile tileValue={grid[15]}/> <Tile tileValue={grid[16]}/>
            </div>
    </div>
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