import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Tile from './Tile';

let container = null;

describe('Tile', () => {
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

    it('Tile renders with custom value other than 0', () => {
        act(() => {
            render(<Tile tileValue='10'/>, container);
        });
        expect(container.textContent).toBe('10');
    });

    it('Tile renders empty if value is 0', () => {
        act(() => {
            render(<Tile tileValue={0} />, container);
        });
        expect(container.textContent).toBe('');
    });
});
