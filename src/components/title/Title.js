import React from 'react';
import './Title.css';

function Title(title) {
    if (title.text) {
        return <h1 className='Title'>{title.text}</h1>;
    } else {
        return <h1 className='Title'>2048 Everywhere</h1>
    }
}

export default Title;