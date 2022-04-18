import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from 'App';
import { createTestStore } from 'store';

let store

describe("Test UI rendering", () => {
    beforeEach(() => {
        store = createTestStore();
    });
    
    test('renders all initial UI', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const headerElement = screen.getByText(/Welcome to NotesWithTags!/i);
        expect(headerElement).toBeInTheDocument();

        const notesButtonsElement = screen.getByText(/New Note/i);
        expect(notesButtonsElement).toBeInTheDocument();

        const importElement = screen.getByText(/Import .NWT file/i);
        expect(importElement).toBeInTheDocument();

        const exportElement = screen.getByText(/Export .NWT file/i);
        expect(exportElement).toBeInTheDocument();
    });
});
