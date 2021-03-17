import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js';
import Notes from './Notes.js';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="side col-1">
            <Sidebar />
          </div>
          <div className="notes col-11">
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
