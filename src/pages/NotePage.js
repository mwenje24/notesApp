import React from 'react'
import notes from '../assets/data'

const NotePage = ({match}) => {
    let noteId = match.params.id
    console.log("noteId:", noteId)
    let note = notes.find(note => note.id === Number(noteId))
  return (
    <div>
      <p>{note.body}</p>
    </div>
  )
}

export default NotePage
