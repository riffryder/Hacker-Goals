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
  }
  
  addNewGoal(goal) {
    console.log(`${goal} was added`);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })d
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

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