import React from 'react'
import { Container, Note, NoteTitle, NoteBody } from '../styles/DisplayAll'

const DisplayOne = ({
  deleteNote,
  changeDisplayedPage,
  title,
  textBody,
  _id
}) => (
  <Container>
    <Note key={_id}>
      <button>Edit</button>
      <button
        onClick={() => {
          deleteNote(_id)
          changeDisplayedPage('all')
        }}
      >
        Delete
      </button>
      <NoteTitle>{title}</NoteTitle>
      <NoteBody>{textBody}</NoteBody>
    </Note>
  </Container>
)

export default DisplayOne