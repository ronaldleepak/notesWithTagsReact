import { render, screen } from '@testing-library/react';
import App from '../App';

export const NewNote = test('New Note', () => {
    render(<App />);
});

export const DeleteNote = test('Delete Note', () => {
    render(<App />);
});

export const UpdateNote = test('Update Note', () => {
    render(<App />);
});

export const ViewNote = test('View Note', () => {
    render(<App />);
});
