import { useSelector } from 'react-redux'

export const GetNotes = () => {
  const notes = useSelector(state => state.notes)
  return notes;
}
