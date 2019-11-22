import React, { useEffect, useState } from 'react';
import './App.css';
import Title from '../title/Title';
import Board from '../board/Board';
import { generateGameState } from '../../engine/GameEngine';

export default function App() {
  const [gameState, setGameState] = useState(generateGameState(4,4));
  const [gameBoard, setGameBoard] = useState(<Board gameState={gameState}/>);

  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        {gameBoard}
      </header>
    </div>
  );
}