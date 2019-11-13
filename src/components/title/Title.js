import React from 'react';
import './Title.css';

function Title(props) {
    if (props.text) {
        return <h1 className='Title'>{props.text}</h1>;
    } else {
        return <h1 className='Title'>2048 Everywhere</h1>
    }
}

export default Title;