import './css/App.css';
import Note from './components/Notes.js';
import { useEffect, useState } from 'react';
import NoteContext from './components/NoteContext.js'

function App() {
  const [noteState, setNotes] = useState([]);
  const addNote = (color) => {
    const notes = noteState.slice();
    const lastItem = noteState.pop();
    const lastId = lastItem? lastItem.id : 0;
    const note = {color: color, id: lastId+1, text: ""}

    notes.push(note)
    setNotes(notes)
    localStorage.setItem('@note-app:notes', JSON.stringify(notes));
  }

  useEffect(() => {
    const storagedNotes = localStorage.getItem('@note-app:notes');
    if(storagedNotes) {
      setNotes(JSON.parse(storagedNotes))
    }
  }, [])

  const colors = ['red', 'blue', 'yellow', 'green'];


  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="side col-1">
            <div className="Sidebar">
              <p>Note it</p>
              <div className="Add-note">
                {colors.map(color =>
                    <button className={`button ${color}`}
                    type="button"
                    onClick={() => addNote(color)}
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