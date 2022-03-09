import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './Reducers'
import { createStore, combineReducers } from 'redux';

export const createTestStore = () => {
  const store = createStore(
      combineReducers({
          notes: notesReducer,
      })
  );
  return store;
}

export default configureStore({
  reducer: {
      notes: notesReducer,
  }
})
