import React from 'react';
import Pet from './Pet';
import PlayLevel from './PlayLevel';
import EatLevel from './EatLevel';
import SleepLevel from './SleepLevel';
import PropTypes from 'prop-types';

function Display(props) {
  return(
    <div>
      <style jsx>
        {`
          .level-container {
            display: flex;
          }
          .level {
            margin: 0 30px;
          }
          `}
      </style>
      <div className="level-container">
        <div className="level">
          <PlayLevel
            playLevelStart={props.character.playLevel}/>
        </div>
        <div className="level">
          <EatLevel
            foodLevelStart={props.character.foodLevel}
            />
        </div>
        <div className="level">
          <SleepLevel
            sleepLevelStart={props.character.sleepLevel}/>
        </div>
      </div>
      <Pet />
    </div>
  );
}

Display.propTypes = {
  character: PropTypes.object,
};

export default Display;
