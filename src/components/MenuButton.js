import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{position:'absolute'}}>
      <button onClick={toggleMenu} className="menu-button">
        Menu
      </button>
      {isOpen && (
        <ul className="menu">
          <li onClick={toggleMenu}>
            <Link to="/">Billing List</Link>
          </li>
          {/* <li>
            <Link to="/billing-details">Billing Details</Link>
          </li> */}
          <li onClick={toggleMenu}>
            <Link to="/billing-form">Create New Bill</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MenuButton;
