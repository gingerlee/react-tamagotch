import React from 'react';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

function PlayButton(props){
  return(
    <div>
      <Button onClick={props.onPlayWithMe} waves='light'>Play with me<Icon left>face</Icon></Button>
    </div>
  );
}

PlayButton.propTypes = {
  onPlayWithMe: PropTypes.func
};

export default PlayButton;
