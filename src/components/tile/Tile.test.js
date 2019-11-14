import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Tile from './Tile';

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

it('Tile renders without crashing', () => {
    act(() => {
        render(<Tile/>, container);
    });
});

it('Tile renders with custom or default value', () => {
    act(() => {
        render(<Tile tileValue='10'/>, container);
    });
    expect(container.textContent).toBe('10');

    act(() => {
        render(<Tile />, container);
    });
    expect(container.textContent).toBe('');
});
