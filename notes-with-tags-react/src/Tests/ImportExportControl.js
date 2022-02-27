import { render, screen } from '@testing-library/react';
import App from '../App';

export const Import = test('Import', () => {
    render(<App />);
});

export const Export = test('Export', () => {
    render(<App />);
});
