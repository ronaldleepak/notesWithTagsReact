import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import Home from '../Pages/Home';
import { createTestStore } from '../store';

let store

describe("Test import export controls", () => {
    beforeEach(() => {
        store = createTestStore();
    });
    
    test('Import', () => {
        render(
            <Provider store={store}>
                <Home notes={[]} />
            </Provider>
        );
    });

    test('Export', () => {
        render(
            <Provider store={store}>
                <Home notes={[]} />
            </Provider>
        );
    });
});
