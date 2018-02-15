import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>Bulbasaur Tamagotchi San</h1>
      <Link to="/"></Link>
    </div>
  );
}

export default Header;
