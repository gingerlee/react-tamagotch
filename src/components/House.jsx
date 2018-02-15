import React from 'react';
import Display from './Display';
import Control from './Control';

class House extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 10,
      sleepLevel: 10,
      playLevel: 10
    };
    this.handleStartGame = this.handleStartGame.bind(this);
  }

  handleStartGame(){
    this.setState({
      foodLevel: 10,
      sleepLevel: 10,
      playLevel: 10
    });
  }

  render(){
    return(
      <div>
        <Display onStartGame={this.handleStartGame}/>
        <Control />
      </div>
    );
  }
}

export default House;
