import React from 'react';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';
import EatButton from './EatButton';

function Control() {
  return(
    <div>
      <style jsx>
        {`
          .button-container {
            display: flex;
            margin: 10px;
            padding: 10px;
          }
          .button {
            margin: 10px;
          }
          `}
      </style>
      <div className="button-container">
        <div className="button">
          <PlayButton  />
        </div>
        <div className="button">
          <EatButton />
        </div>
        <div className="button">
          <SleepButton />
        </div>
      </div>
    </div>
  );
}

export default Control;
