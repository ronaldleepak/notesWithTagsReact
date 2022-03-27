import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux'
import NoteList from '../Components/NoteList';
import NoteCard from '../Components/NoteCard';
import { createTestStore } from '../store';

let store

describe("Test note controls", () => {
    beforeEach(() => {
        store = createTestStore();
    });

    test('New Note', () => {
        render(
            <Provider store={store}>
                <NoteList notes={[]}/>
            </Provider>
        );
        
        fireEvent.click(screen.getByRole('button', { name: "new-note" }))
    
        // new a note then see if the note UI is correct
    
        const noteHeaderElement = screen.getByText("Write your header here");
        expect(noteHeaderElement).toBeInTheDocument();

        // new two notes then see if the ordering of notes is correct
    });

    test('Change Note Viewing Status', () => {
        render(
            <Provider store={store}>
                <NoteCard note={{
                    id: 'testID',
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
        fireEvent.click(screen.getByRole('button', { name: "edit-note" }))
        var noteEditDialog = screen.getByRole('listitem', { name: 'note-edit' });
        expect(noteEditDialog).toBeInTheDocument();
    
        // from edit status to view detail
        fireEvent.click(screen.getByRole('button', { name: "close-note" }))
        noteEditDialog = screen.getByRole('listitem', { name: 'note-detail' });
        expect(noteEditDialog).toBeInTheDocument();
    
        // from view to thumbnail
        fireEvent.click(screen.getByText('header'))
        noteThumbnailDialog = screen.getByRole('listitem', { name: 'note-thumbnail' });
        expect(noteThumbnailDialog).toBeInTheDocument();
    });

    test('Delete Note', () => {
        render(
            <Provider store={store}>
                <NoteList notes={[]}/>
            </Provider>
        );
    
        // new 3 notes
        fireEvent.click(screen.getByRole('button', { name: "new-note" }))
        fireEvent.click(screen.getByRole('button', { name: "new-note" }))
        fireEvent.click(screen.getByRole('button', { name: "new-note" }))
    
        // delete the second note then see if the ordering of notes is correct

        // delete the second note again
    
        // delete the last note then see if the UI is fine
    });

    test('Update Note', () => {
        render(
            <Provider store={store}>
                <NoteCard note={{
                    id: 'testID',
                    tags: [],
                    header: 'header',
                    content: 'contents',
                    createdDate: Date.now(),
                    modifiedDate: Date.now(),
                }} />
            </Provider>
        );

        // go to edit mode
        fireEvent.click(screen.getByText('header'))
        fireEvent.click(screen.getByRole('button', { name: "edit-note" }))

        // change header
        const headerInput = screen.getByRole('textbox', {name: "note-header-input"})
        fireEvent.keyDown(headerInput, {key: 'testing header'})
        
        screen.getByText("???")
    
        // // change header
        // const headerInput = screen.getByRole('textbox', {name: "note-header-input"})
        // fireEvent.keyDown(headerInput, {key: 'testing header'})
    
        // // save and check if note updated
        // fireEvent.click(screen.getByRole('button', { name: "save-note" }))
    
        // // change content
        // const contentInput = screen.getByRole('textbox', {name: "note-content-input"})
        // fireEvent.keyDown(contentInput, {key: 'testing content'})
    
        // // save and check if note updated
        // fireEvent.click(screen.getByRole('button', { name: "save-note" }))
    
        // // change header and content
    
        // // save and check if note updated
        // fireEvent.click(screen.getByRole('button', { name: "save-note" }))
    
        // // change header and content
    
        // // close without saving and check if note updated
    });
});
