import react from 'react';
import './Sidebar.css';

function Sidebar(props) {
    return (
      <div className="Sidebar">
            <p>Note it</p>
            <div className="Add-note">
              <button stype="button">+</button>
            </div>
      </div>
    );
}

export default Sidebar;