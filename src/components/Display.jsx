import React from 'react';
import Pet from './Pet';
import PlayLevel from './PlayLevel';
import EatLevel from './EatLevel';
import SleepLevel from './SleepLevel';

function Display() {
  return(
    <div>
      <style jsx>
        {`
          .level-container {
            display: flex;
          }
          .level {
            margin: 10px;
          }
          `}
      </style>
      <div className="level-container">
        <div className="level">
          <PlayLevel />
        </div>
        <div className="level">
          <EatLevel />
        </div>
        <div className="level">
          <SleepLevel />
        </div>
      </div>
      <Pet />
    </div>
  );
}

export default Display;
