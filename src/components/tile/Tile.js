import React from 'react';
import './Tile.css';

function Tile(props) {
    var currentValue = 0;

    if (props.value) {
        currentValue = props.value;
    }

    return <div className='Tile'>{currentValue}</div>
}

export default Tile;