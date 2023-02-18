import { useState } from 'react';
import './dropdown.css';

function Dropdown() {
  const [active, setActive] = useState(false);
  return(
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=>{
        setActive(!active)
      }}>Choose one method 
      <span className="fas fa-caret-down"></span>
      </div>
      {active && (
        
        <div className="dropdown-content">
          <div className="dropdown-item">Get</div>
          <div className="dropdown-item">Put</div>
          <div className="dropdown-item">Post</div>
        </div>
      )}
    </div>
  )
}
export default Dropdown;