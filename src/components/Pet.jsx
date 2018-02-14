import React from 'react';
import char from '../assets/images/char.png';
import ipad from '../assets/images/ipad.png';
import gameBackground from '../assets/images/gameBackground.gif';

function Pet() {
  return(
    <div>
      Pet works!
      <img src={char}/>
      <img src={gameBackground}/>
      <img src={ipad}/>
    </div>
  );
}

export default Pet;
