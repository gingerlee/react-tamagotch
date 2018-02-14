import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1> Welcome to Tamagotchi!</h1>
      <Link to="/">Start Game</Link>
    </div>
  );
}

export default Header;
