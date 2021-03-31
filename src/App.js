import logo from './logo.svg';
import './App.css';
import Note from './Notes.js';
import { useState } from 'react';


function App() {
  const [noteState, setNotes] = useState([{color: 'blue', id: '0'}]);

  const carregarNote = (color) => {
    noteState.length<=14 ? setNotes([...noteState, {color: `${color}`, id: `${noteState.length}`, text: 'mac'}]) : console.log('limite')
  }

  const deleteNote = (note) => {
    const notes = Object.assign([],noteState);
    console.log("notes:", notes)
    console.log(notes.splice(notes.indexOf(note), 1));
    setNotes(notes);
  }

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="side col-1">
            <div className="Sidebar">
              <p>Note it</p>
              <div className="Add-note">
                <button className="button red "
                type="button"
                onClick={() => carregarNote('red')}
                />
                <button className="button blue" 
                type="button" 
                onClick={() => carregarNote('blue')}
                />
                <button className="button yellow" 
                type="button"
                onClick={() => carregarNote('yellow')}
                />
                <button className="button green" 
                type="button"
                onClick={() => carregarNote('green')}
                />
                
                
              </div>
            </div>
          </div>
          <div className="notes col">
            {
            noteState
            .map((note) => {
              return <Note color={note.color} id={note.id}  deleteNote={() => deleteNote(note)} text={note.text}/>
            })

            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;