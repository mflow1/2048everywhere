import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Board from './Board';
import GameEngine from '../../engine/GameEngine'

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Board renders without crashing', () => {
    act(() => {
        let gameEngine = new GameEngine(4,4);
        render(<Board gameState={gameEngine.gameState}/>, container);
    });
});