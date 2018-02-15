import React from 'react';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';
import EatButton from './EatButton';
import PropTypes from 'prop-types';

function Control(props) {
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
          <PlayButton onPlayWithMe={props.handlePlayWithMe}  />
        </div>
        <div className="button">
          <EatButton onFeedMe={props.handleFeedMe}/>
        </div>
        <div className="button">
          <SleepButton onPutMeToSleep={props.handlePutMeToSleep}/>
        </div>
      </div>
    </div>
  );
}

Control.propTypes = {
  handlePutMeToSleep: PropTypes.func,
  handleFeedMe: PropTypes.func,
  handlePlayWithMe: PropTypes.func
};

export default Control;
