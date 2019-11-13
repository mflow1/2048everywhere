import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Tile from './Tile';
import { join } from 'path';

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

it('renders with custom or default value', () => {
    act(() => {
        render(<Tile value='10'/>, container);
    });
    expect(container.textContent).toBe('10');

    act(() => {
        render(<Tile />, container);
    });
    expect(container.textContent).toBe('0');
});
