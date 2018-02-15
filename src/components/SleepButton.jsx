import React from 'react';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

function SleepButton(props){
  return(
    <div>
      <Button onClick={props.onPutMeToSleep} waves='light'>Put me to sleep<Icon left>hotel</Icon></Button>
    </div>
  );
}
SleepButton.propTypes = {
  onPutMeToSleep: PropTypes.func
};

export default SleepButton;
