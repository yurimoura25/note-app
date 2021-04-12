import './css/App.css';
import Note from './components/Notes.js';
import { useState } from 'react';
import NoteContext from './components/NoteContext.js'

function App() {
  const [noteState, setNotes] = useState([]);
  const carregarNote = (color) => {
    const notes = noteState.slice();

    const lastItem = noteState.pop();
    const lastId = lastItem? lastItem.id : 0;
    const note = {color: color, id: lastId+1, text: ""}

    notes.push(note)
    setNotes(notes)
  }


  const colors = ['red', 'blue', 'yellow', 'green', 'black'];


  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="side col-1">
            <div className="Sidebar">
              <p>Note it</p>
              <div className="Add-note">
                {colors.map(color =>
                    <button className={'button '+ color}
                    type="button"
                    onClick={() => carregarNote(color, `Note de cor: ${color.toString}`)}
                    />
                  )
                }
                
                
              </div>
            </div>
          </div>
          <div className="notes col">
            <NoteContext.Provider value={{noteState, setNotes}} > 
              {
              noteState
              .map(note => (
                  <Note color={note.color} id={note.id} text={note.text}/>
                ))
              }
            </NoteContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;