import { useContext } from 'react';
import '../css/Note.css';
import NoteContext from './NoteContext.js'

function Notes(props) {

  const notesContext = useContext(NoteContext);

  const deleteNote = (note) => {
    if(note) {
      const notes = notesContext.noteState.slice();
      const itemIndex = notesContext.noteState.findIndex(item => item.id === props.id);

      notes.splice(itemIndex, 1)
      notesContext.setNotes(notes)
    }
  }
  const changeText = (note) => {
    if(note) {
      const textArea = document.getElementById(`${note.id}text`)
      const notes = notesContext.noteState.slice();
      let item = notesContext.noteState.find(item => item.id === props.id);
      item.text = textArea.value;

      notesContext.setNotes(notes)
      console.log(item)
    }
  }

  const cardClass = 'card '.concat(props.color);
  const textClass = 'card-text '.concat(props.color);
  const text = props.text;
  const edit = () => {
    const note = document.getElementById(`${props.id}text`)
    note.getAttribute('disabled') ? note.removeAttribute('disabled') : note.setAttribute('disabled', 'disabled');
    const button = document.getElementById(`${props.id}button`);
    button.innerText.includes('Save') ? button.innerText = 'Edit' : button.innerText = 'Save';
  }

    return (
          <div className={cardClass} id={props.id}>
              <div className="card-body">
                <div className="row01">
                  <textarea 
                  className={textClass} 
                  id={`${props.id}text`} 
                  maxLength="180" 
                  onDoubleClick={edit} 
                  value={text}
                  onChange={() =>changeText(props)}
                  ></textarea>
                </div>
                <div className="row02">
                  <button 
                  type="button" 
                  className="delete-button" 
                  id={props.id} 
                  onClick={() => deleteNote(props)}
                  >Delete</button>
                  <button 
                  type="button" 
                  className="edit-button" 
                  id={`${props.id}button`}
                  onClick={edit}>Save</button>
                </div>
              </div>
          </div>
    );
}

export default Notes;