import { useContext } from 'react';
import '../css/Note.css';
import NoteContext from './NoteContext.js'

export default function Notes(props) {

  //Hooks
  const notesContext = useContext(NoteContext);

  //Functions
  const deleteNote = (note) => {
    if(note) {
      const notes = notesContext.noteState.slice();
      const itemIndex = notesContext.noteState.findIndex(item => item.id === props.id);

      notes.splice(itemIndex, 1)
      notesContext.setNotes(notes)
    }
  }
  const changeNoteText = (note) => {
    if(note) {
      const textArea = document.getElementById(`${note.id}text`)
      const notes = notesContext.noteState.slice();
      let item = notes.find(item => item.id === props.id);
      item.text = textArea.value;

      notesContext.setNotes(notes)
      localStorage.setItem('@note-app:notes', JSON.stringify(notes));
    }
  }
  const saveAndEdit = () => {
    const note = document.getElementById(`${props.id}text`)
    note.getAttribute('disabled') ? note.removeAttribute('disabled') : note.setAttribute('disabled', 'disabled');
    const button = document.getElementById(`${props.id}button`);
    button.innerText.includes('Save') ? button.innerText = 'Edit' : button.innerText = 'Save';
  }

  const cardClass = 'card '.concat(props.color);
  const textClass = 'card-text '.concat(props.color);
  const text = props.text;

    return (
          <div className={cardClass} id={props.id}>
              <div className="card-body">
                <div className="row01">
                  <textarea 
                    className={textClass} 
                    id={`${props.id}text`} 
                    maxLength="180" 
                    onDoubleClick={saveAndEdit} 
                    value={text}
                    onChange={() => changeNoteText(props)}/>
                </div>
                <div className="row02">
                  <button 
                    type="button" 
                    className="delete-button" 
                    id={props.id} 
                    onClick={() => deleteNote(props)}
                    >Delete
                  </button>
                  <button 
                    type="button" 
                    className="edit-button" 
                    id={`${props.id}button`}
                    onClick={saveAndEdit}>Save
                  </button>
                </div>
              </div>
          </div>
    );
}