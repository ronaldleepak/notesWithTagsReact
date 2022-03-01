import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './Reducers'

export default configureStore({
  reducer: {
      note: notesReducer,
  }
})
