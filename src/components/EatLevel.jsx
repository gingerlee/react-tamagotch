import React from 'react';
import PropTypes from 'prop-types';

function EatLevel(props){
  return(
    <div>
      <h5>Eat:{props.eatLevel}</h5>
    </div>
  );
}

EatLevel.propTypes = {
  onStartGame: PropTypes.func
};

export default EatLevel;
