import react from 'react';
import './Note.css';


function Notes(props) {
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
                  defaultValue={text}
                  ></textarea>
                </div>
                <div className="row02">
                  <button type="button" className="delete-button" id={props.id} onClick={() => props.deleteNote()}>Delete</button>
                  <button type="button" className="edit-button" id={`${props.id}button`}onClick={edit}>Save</button>
                </div>
              </div>
          </div>
    );
}

export default Notes;