import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  NotesContainer,
  PageHeader,
  Note,
  NoteTitle,
  NoteBody,
  HeaderWrapper,
  CheckboxContainer,
  HiddenDefault,
  StyledCheckbox
} from '../styles/DisplayAll'

// notebody click handler is to make it easy to clean up notes
// if they get too busy

class DisplayAll extends Component {
  handleCheckChange = event => {
    event.persist()
    const { addChecked, removeChecked } = this.props

    if (event.target.checked) {
      // console.log(`${event.target.name} is checked`)
      addChecked(event.target.name)
    } else {
      // console.log(`${event.target.name} is unchecked`)
      removeChecked(event.target.name)
    }
  }

  render() {
    const { notes, checked, searchParam } = this.props
    const { handleCheckChange } = this
    const filteredNotes = notes.filter(({ title }) =>
      title.toLowerCase().match(searchParam)
    )

    return (
      <Container>
        <PageHeader>
          {notes.length > filteredNotes.length
            ? `Your search for ${searchParam} matches ${
                filteredNotes.length
              } notes:`
            : `You currently have ${notes.length} notes:`}
        </PageHeader>
        <NotesContainer>
          {filteredNotes.map(({ title, textBody, _id }) => (
            <Note key={_id}>
              <HeaderWrapper>
                <Link to={`/note/${_id}`}>
                  <NoteTitle>
                    {title.length > 40
                      ? `${title.substring(0, 40)} ...`
                      : title}
                  </NoteTitle>
                </Link>

                <CheckboxContainer onChange={handleCheckChange}>
                  <HiddenDefault type="checkbox" name={_id} />
                  <StyledCheckbox isChecked={checked.includes(_id)} />
                </CheckboxContainer>
              </HeaderWrapper>
              <NoteBody>
                {textBody.length > 200
                  ? `${textBody.substring(0, 200)} ...`
                  : textBody}
              </NoteBody>
            </Note>
          ))}
        </NotesContainer>
      </Container>
    )
  }
}

export default DisplayAll
