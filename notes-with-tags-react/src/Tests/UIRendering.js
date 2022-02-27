import { render, screen } from '@testing-library/react';
import App from '../App';

export default test('renders all initial UI', () => {
    render(<App />);
    const headerElement = screen.getByText(/Welcome to NotesWithTags!/i);
    expect(headerElement).toBeInTheDocument();

    const notesButtonsElement = screen.getByText(/New Note/i);
    expect(notesButtonsElement).toBeInTheDocument();

    const importElement = screen.getByText(/Import .NWT file/i);
    expect(importElement).toBeInTheDocument();

    const exportElement = screen.getByText(/Export .NWT file/i);
    expect(exportElement).toBeInTheDocument();
});
