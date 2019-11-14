import React from 'react';
import './Tile.css';

function Tile(props) {
    if (props.tileValue === 0) {
        return <div className='Tile'/>
    } else {
        return <div className='Tile'>{props.tileValue}</div>
    }
}

export default Tile;