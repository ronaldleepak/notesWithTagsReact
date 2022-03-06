import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux'
import App from '../App';
import NoteList from '../Components/NoteList';
import NoteCard from '../Components/NoteCard';
import store from '../store';

export const NewNote = test('New Note', () => {
    render(
        <Provider store={store}>
            <NoteList notes={
                []
            }/>
        </Provider>
    );
    
    fireEvent.click(screen.getByText('New Note'))

    // new a note then see if the note UI is correct

    const noteHeaderElement = screen.getByText(/Write your header here/i);
    expect(noteHeaderElement).toBeInTheDocument();

    // new two notes then see if the ordering of notes is correct
});

export const ChangeNoteViewingStatus = test('Change Note Viewing Status', () => {
    render(
        <Provider store={store}>
            <NoteCard note={{
                noteID: 'testID',
                tags: [],
                header: 'header',
                content: 'contents',
                createdDate: Date.now(),
                modifiedDate: Date.now(),
            }} />
        </Provider>
    );

    // ensure it is in thumbnail
    var noteThumbnailDialog = screen.getByRole('listitem', {name: "note-thumbnail"});
    expect(noteThumbnailDialog).toBeInTheDocument();

    // from thumbnail to view detail
    fireEvent.click(screen.getByText('header'))
    var noteDetailDialog = screen.getByRole('listitem', { name: 'note-detail' });
    expect(noteDetailDialog).toBeInTheDocument();

    // from view detail to edit
    fireEvent.click(screen.getByText('Edit'))
    var noteEditDialog = screen.getByRole('listitem', { name: 'note-edit' });
    expect(noteEditDialog).toBeInTheDocument();

    // from edit status to view detail
    fireEvent.click(screen.getByText('Close Without Saving'))
    noteEditDialog = screen.getByRole('listitem', { name: 'note-detail' });
    expect(noteEditDialog).toBeInTheDocument();

    // from view to thumbnail
    fireEvent.click(screen.getByText('header'))
    noteThumbnailDialog = screen.getByRole('listitem', { name: 'note-thumbnail' });
    expect(noteThumbnailDialog).toBeInTheDocument();
});

export const DeleteNote = test('Delete Note', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // new 3 notes
    fireEvent.click(screen.getByText('New Note'))
    fireEvent.click(screen.getByText('New Note'))
    fireEvent.click(screen.getByText('New Note'))

    // delete the second note then see if the ordering of notes is correct

    // delete the second note again

    // delete the last note then see if the UI is fine
});

export const UpdateNote = test('Update Note', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // new 1 note
    fireEvent.click(screen.getByText('New Note'))

    // change header

    // save and check if note updated

    // change content

    // save and check if note updated

    // change header and content

    // save and check if note updated
});
