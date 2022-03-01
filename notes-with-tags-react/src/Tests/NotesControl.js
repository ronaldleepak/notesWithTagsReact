import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

export const NewNote = test('New Note', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('New Note'))

    // new a note then see if the note UI is correct

    const noteHeaderElement = screen.getByText(/Write your header here/i);
    expect(noteHeaderElement).toBeInTheDocument();

    // new two notes then see if the ordering of notes is correct
});

export const ChangeNoteViewingStatus = test('Change Note Viewing Status', () => {
    render(<App />);

    // new 1 note
    fireEvent.click(screen.getByText('New Note'))

    // from thumbnail to view detail

    // from view detail to edit

    // from edit status to view detail

    // from view to thumbnail
});

export const DeleteNote = test('Delete Note', () => {
    render(<App />);

    // new 3 notes
    fireEvent.click(screen.getByText('New Note'))
    fireEvent.click(screen.getByText('New Note'))
    fireEvent.click(screen.getByText('New Note'))

    // delete the second note then see if the ordering of notes is correct

    // delete the second note again

    // delete the last note then see if the UI is fine
});

export const UpdateNote = test('Update Note', () => {
    render(<App />);

    // new 1 note
    fireEvent.click(screen.getByText('New Note'))

    // change header

    // save and check if note updated

    // change content

    // save and check if note updated

    // change header and content

    // save and check if note updated
});
