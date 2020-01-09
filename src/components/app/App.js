import React from 'react';
import './App.css';
import Title from '../title/Title';
import Board from '../board/Board';
import GameEngine from '../../engine/GameEngine';
import { AlternateGameState, AlternateGameEngine } from '../../engine/alternateGameEngine';

export default class App extends React.Component {
  constructor() {
    super();
    this.gameEngine = new AlternateGameEngine();

    this.state = { gameState: this.gameEngine.tiles }

    this.handleKeyDown = this.handleKeyDown.bind(this);
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
      this.gameEngine.processUpCommand();
      console.log(this.gameEngine.tiles);
    } else if (event.key === 'ArrowDown') {
      this.gameEngine.processDownCommand();
    } else if (event.key === 'ArrowLeft') {
      this.gameEngine.processLeftCommand();
    } else if (event.key === 'ArrowRight') {
      this.gameEngine.processRightCommand();
    }
    this.setState({ gameState: this.gameEngine.tiles });
  };


  render() {
    return  <div className="App">
              <header className="App-header">
                <Title/>
                <Board gameState={this.state.gameState}/>
              </header>
            </div>
  }
}