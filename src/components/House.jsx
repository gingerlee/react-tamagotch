import React from 'react';
import Display from './Display';
import Control from './Control';

class House extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 4,
      sleepLevel: 7,
      playLevel: 9
    };
    this.handlePlayWithMe = this.handlePlayWithMe.bind(this);
    this.handlePutMeToSleep = this.handlePutMeToSleep.bind(this);
    this.handleFeedMe = this.handleFeedMe.bind(this);
    this.setHunger = this.setHunger.bind(this);
  }

  handlePlayWithMe() {
    let newPlayLevel = this.state.playLevel;
    newPlayLevel = 10;
    this.setState({playLevel: newPlayLevel});
  }

  handleFeedMe() {
    let newFoodLevel = this.state.foodLevel;
    newFoodLevel = 10;
    this.setState({foodLevel: newFoodLevel});
  }

  handlePutMeToSleep(){
    let newSleepLevel = this.state.sleepLevel;
    newSleepLevel = 10;
    this.setState({sleepLevel: newSleepLevel});
  }

  setHunger() {
    setInterval(() => {
      if(this.state.foodLevel === 0){
        return this.state.foodLevel;
      } else {
        this.state.foodLevel--;
      }
    }, 2000);
  }

  render(){
    return(
      <div>
        <Display character={this.state}/>
        <Control
          handleFeedMe={this.handleFeedMe}
          handlePlayWithMe={this.handlePlayWithMe}
          handlePutMeToSleep={this.handlePutMeToSleep}
          setHunger={this.setHunger}/>
      </div>
    );
  }
}

export default House;
