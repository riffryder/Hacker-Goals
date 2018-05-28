import React from 'react';
import $ from 'jquery';

import Goals from './Goals.jsx';
import Quote from './Quote.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toString(),
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
      console.log('Success in creating new goal ', goal);
      this.state.goals.push(goal);
      this.setState({
        goals: this.state.goals
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
  }

  render() {
    return (
    <div>
      <div className='title'>
        <h1>Hacker Goals</h1>
      </div>
      <div className='greeting'>
        <h3>Good Morning Raphael</h3>
        <h4>{this.state.date}</h4>
      </div>
      <Quote />
      <Goals addNewGoal={this.addNewGoal} goals={this.state.goals} />
    </div>
    )
  }
}

export default App;