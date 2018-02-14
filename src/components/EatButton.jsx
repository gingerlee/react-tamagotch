import React from 'react';
import {Button, Icon} from 'react-materialize';

function EatButton(){
  return(
    <div>
      <Button waves='light'>Feed Me!<Icon left>local_pizza</Icon></Button>
    </div>
  );
}

export default EatButton;
