import React from 'react';
import Pet from './Pet';
import PlayLevel from './PlayLevel';
import EatLevel from './EatLevel';
import SleepLevel from './SleepLevel';

function Display() {
  return(
    <div>
      Display works!
      <Pet />
      <PlayLevel />
      <EatLevel />
      <SleepLevel />
    </div>
  );
}

export default Display;
