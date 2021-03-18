import react from 'react';
import './Note.css';

function Notes(props) {
    return (
          <div className={props.color}>
              <div className="card-body">
                <div className="row01">
                  <p className="card-text">{props.text}</p>
                </div>
              </div>
          </div>
    );
}

export default Notes;