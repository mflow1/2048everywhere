import React, { useState } from 'react';
import './Tile.css';

function Tile(props) {
    const [tileValue, setTileValue] = useState(0);

    if (props.value) {
        setTileValue(props.value);
    }

    return <div className='Tile'>{tileValue}</div>
}

export default Tile;