import React from 'react';
import PropTypes from 'prop-types';

function PlayLevel(props){
  return(
    <div>
      <h5>Play:{props.playLevel}</h5>
    </div>
  );
}

PlayLevel.propTypes = {
  onStartGame: PropTypes.func
};

export default PlayLevel;
