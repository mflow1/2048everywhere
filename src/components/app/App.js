import React from 'react';
import './App.css';
import Title from '../title/Title';
import Board from '../board/Board';
import { generateGameState } from '../../engine/GameEngine';

export default class App extends React.Component {
  constructor() {
    super();
    this.gameState = generateGameState(4,4);
    this.gameBoard = <Board gameState={this.gameState}/>;
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    console.log(event.key);
    if (event.key === 'ArrowUp') {
      console.log('processUp()');
    } else if (event.key === 'ArrowDown') {
      console.log('processDown()');
    } else if (event.key === 'ArrowLeft') {
      console.log('processLeft()');
    } else if (event.key === 'ArrowRight') {
      console.log('processRight()');
    }
  };


  render() {
    return  <div className="App">
              <header className="App-header">
                <Title/>
                {this.gameBoard}
              </header>
            </div>
  }
}