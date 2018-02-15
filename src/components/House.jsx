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
    {/*this.handlePlayWithMe = this.handlePlayWithMe.bind(this);
    this.handlePutMeToSleep = this.handlePutMeToSleep.bind(this);
    this.handleFeedMe = this.handleFeedMe.bind(this);*/}

    {/*this.updateHunger = this.updateHunger.bind(this);
    this.updateSleep = this.updateSleep.bind(this);
    this.updatePlay = this.updatePlay.bind(this);*/}
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

  updateHunger() {
    let updateFoodLevel = this.state.foodLevel;
    if (this.state.foodLevel === 0){
      updateFoodLevel;
    } else {
      updateFoodLevel--;
    }
    this.setState({foodLevel: updateFoodLevel});
  }

  updateSleep() {
    let updateSleepLevel = this.state.sleepLevel;
    if (this.state.sleepLevel === 0) {
      updateSleepLevel;
    } else {
      updateSleepLevel--;
    }
    this.setState({sleepLevel: updateSleepLevel});
  }

  updatePlay() {
    let newPlayLevel = this.state.playLevel;
    if (this.state.playLevel === 0) {
      newPlayLevel;
    } else {
      newPlayLevel--;
    }
    this.setState({playLevel: newPlayLevel});
  }

  componentDidMount() {
    setInterval(() =>
      this.updateHunger(),
    2000);
    setInterval(() =>
      this.updateSleep(),
    5000);
    setInterval(() =>
      this.updatePlay(),
    4000);
  }

  render(){
    return(
      <div>
        <Display character={this.state}/>
        <Control
          handleFeedMe={this.handleFeedMe}
          handlePlayWithMe={this.handlePlayWithMe}
          handlePutMeToSleep={this.handlePutMeToSleep}
          />
      </div>
    );
  }
}

export default House;
