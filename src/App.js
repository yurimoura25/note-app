import logo from './logo.svg';
import './App.css';
import Note from './Notes.js';
import { useState } from 'react';

function App() {
  const [noteState, setNotes] = useState([{color: 'blue'}]);

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="side col-1">
            <div className="Sidebar">
              <p>Note it</p>
              <div className="Add-note">
                <button type="button" className="handle-buttons">+</button>
                <button className="button red" 
                type="button" 
                onClick={() => {noteState.length<17 ? setNotes([...noteState, {color: 'red'}]) : console.log('limite')}}
                />
                <button className="button blue" 
                type="button" 
                onClick={() => {noteState.length<17 ? setNotes([...noteState, {color: 'blue'}]) : console.log('limite')}}
                />

                
              </div>
            </div>
          </div>
          <div className="notes col">
            {
            noteState
            .map((note) => {
              return <Note color={note.color} text={note.text}/>
            })

            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
