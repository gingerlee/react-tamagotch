import React from 'react';
import PropTypes from 'prop-types';

function SleepLevel(props){
  return(
    <div>
      <h5>Sleep:{props.sleepLevel}</h5>
    </div>
  );
}

SleepLevel.propTypes = {
  onStartGame: PropTypes.func
};

export default SleepLevel;
