import React from 'react';
import char from '../assets/images/char.png';
import ipad from '../assets/images/ipad.png';
import gameBackground from '../assets/images/gameBackground.gif';

function Pet() {
  return(
    <div>
      <style jsx>
        {`
          .game-play {
            background-repeat: no-repeat;
            background-size: contain;
            position: relative;
            z-index: -1;
          }
          .ipad-img {
            height: 500px;
            width: 740px;
          }
          .pet-area {
            position: absolute;
            height: 300px;
            width: 800px;
            top: 26px;
            left: 85px;
          }
          .pet-area-img {
            height: 447px;
            width: 586px;
            z-index: 0;
          }
          .pet{
            position: absolute;
            top: 63%;
            left: 33%;
            animation-name: moving;
            animation-duration: 10s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            z-index: 1;
          }
          .pet-img {
            width: 100px;
            height: 100px;
          }
          @keyframes moving {
            0%   {left: 53%;}
            25%  {left: 33%;}
            50%  {left: 13%;}
            100% {left: 23%;}
          }
        `}
      </style>
      <div className="game-play">
        <div className="pet">
          <img className="pet-img" src={char}/>
        </div>
        <div className="pet-area">
          <img className="pet-area-img" src={gameBackground}/>
        </div>
        <div >
          <img className="ipad-img" src={ipad}/>
        </div>
      </div>
    </div>
  );
}

export default Pet;
