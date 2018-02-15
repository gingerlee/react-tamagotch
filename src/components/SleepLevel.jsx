import React from 'react';
import PropTypes from 'prop-types';

function SleepLevel(props){
  return(
    <div>
      <h5>Sleep: {props.sleepLevelStart}</h5>
    </div>
  );
}

SleepLevel.propTypes = {
  sleepLevelStart: PropTypes.number
};

export default SleepLevel;
