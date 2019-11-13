import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Title from './Title';

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

it('Title renders without crashing', () => {
    act(() => {
        render(<Title/>, container);
    });
});

it('renders with custom or default text', () => {
    act(() => {
        render(<Title text='Custom Title'/>, container);
    });
    expect(container.textContent).toBe('Custom Title');

    act(() => {
        render(<Title/>, container);
    });
    expect(container.textContent).toBe('2048 Everywhere');
});
