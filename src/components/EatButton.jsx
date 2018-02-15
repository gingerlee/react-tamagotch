import React from 'react';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

function EatButton(props){
  return(
    <div>
      <Button onClick={props.onFeedMe} waves='light'>Feed Me!<Icon left>local_pizza</Icon></Button>
    </div>
  );
}
EatButton.propTypes = {
  onFeedMe: PropTypes.func
};
export default EatButton;
