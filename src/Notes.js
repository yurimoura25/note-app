import react from 'react';
import './Note.css';

function Notes(props) {
  const cardClass = 'card '.concat(props.color);
  const textClass = 'card-text '.concat(props.red);
    return (
          <div className={cardClass}>
              <div className="card-body">
                <div className="row01">
                  <textarea className={textClass} maxLength="200" disabled="false" >{props.text}</textarea>
                </div>
              </div>
          </div>
    );
}

export default Notes;