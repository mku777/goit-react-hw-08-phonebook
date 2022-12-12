import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{
    marginLeft: '250px',
    fontSize: '23px'
    }}>
      <nav>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
