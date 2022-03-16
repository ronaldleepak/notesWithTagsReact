import { configureStore } from '@reduxjs/toolkit'
import reducer from './Reducers'
import { createStore } from 'redux';

export const createTestStore = () => {
  const store = createStore(
    reducer
  );
  return store;
}

export default configureStore({
  reducer: reducer,
})
