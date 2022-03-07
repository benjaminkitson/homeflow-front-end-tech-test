import React from 'react';
import Search from './Search.js';

function Header(props) {
  return (
    <header className="header">
      <Search getProperties={props.getProperties}/>
    </header>
  );
}

export default Header;
