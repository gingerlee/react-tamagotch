import React from 'react';
import PropTypes from 'prop-types';

function PlayLevel(props){
  return(
    <div>
      <h5>Play: {props.playLevelStart}</h5>
    </div>
  );
}

PlayLevel.propTypes = {
  playLevelStart: PropTypes.number
};

export default PlayLevel;
