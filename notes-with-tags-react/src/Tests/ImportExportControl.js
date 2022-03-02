import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from '../App';
import store from '../store';

export const Import = test('Import', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});

export const Export = test('Export', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});
