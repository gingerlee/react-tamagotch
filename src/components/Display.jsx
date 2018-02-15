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
          <PlayLevel onStartGame={this.handleStartGame}/>
        </div>
        <div className="level">
          <EatLevel onStartGame={this.handleStartGame}/>
        </div>
        <div className="level">
          <SleepLevel onStartGame={this.handleStartGame}/>
        </div>
      </div>
      <Pet />
    </div>
  );
}

Display.propTypes = {
  onStartGame: PropTypes.func
};

export default Display;
