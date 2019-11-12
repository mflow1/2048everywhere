import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import Title from '../title/Title';
import Board from '../board/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Board/>
      </header>
    </div>
  );
}

export default App;
