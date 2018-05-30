import React from 'react';
import $ from 'jquery';
// import styled from 'styled-components';
import styles from '../styles.css'

import Goals from './Goals.jsx';
import Quote from './Quote.jsx'

const mainTitleDiv = {
  textAlign: 'center',
  backgroundColor: '#2b9fda',
  margin: '0'
};

const title = {
  margin: '0',
  fontSize: '40px',
  fontFamily: '"adelle", "Cambria", "Lucida Bright", "Georgia", serif'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
      date: new Date().toDateString(),
      goals: []
    }
    this.addNewGoal = this.addNewGoal.bind(this);
    // console.log('CURRENT STATE', this.state);
  }
  
  addNewGoal(goal) {
    var newGoal = {
      title: goal
    };

    $.post('/goals', newGoal)
    .then(goal => {
      // console.log('Success in creating new goal ', goal);
      // this.state.goals.push(goal);
      // this.setState({
      //   goals: this.state.goals
      // })
      return $.get('/goals')
        .then(goals => {
          // console.log(goals);
          this.setState({
            goals: goals
          })
        })
    })
    .then(goal => {
            // console.log('Success in creating new goal ', goal);
      const goalsCopy = this.state.goals.slice(0)
      goalsCopy.push(goal)
      this.setState({
        goals: goalsCopy
      })
    })
    .catch(err => {
      console.log('Unable to add goal to list ', err);
    })
  }

  componentDidMount() {
    $.get('/goals')
    .then(goals => {
      // console.log(goals);
      this.setState({
        goals: goals
      })
    })
    this.greeting();
  }

  greeting() {
    var currentTime = new Date().getHours();
    var currentGreeting;
    if (currentTime >= 0 && currentTime < 12) {
      currentGreeting = 'Good Morning ';
    } else if (currentTime >= 12 && currentTime < 17) {
      currentGreeting = 'Good Afternoon ';
    } else {
      currentGreeting = 'Good Evening';
    }
    this.setState({
      greeting: currentGreeting
    });
  }

  render() {
    return (
    <div>
      <div className="title">
        <h1 style={title}>Hacker Goals</h1>
      </div>
      <div>
        <h3>{this.state.greeting} Raphael</h3>
        <h4>{this.state.date}</h4>
      </div>
      <Quote />
      <Goals addNewGoal={this.addNewGoal} goals={this.state.goals} />
    </div>
    )
  }
}

export default App;