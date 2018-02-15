import React from 'react';
import PropTypes from 'prop-types';

function EatLevel(props){
  return(
    <div>
      <h5>Eat: {props.foodLevelStart} </h5>
    </div>
  );
}

EatLevel.propTypes = {
  foodLevelStart: PropTypes.number,
  setHunger: PropTypes.func
};

export default EatLevel;
