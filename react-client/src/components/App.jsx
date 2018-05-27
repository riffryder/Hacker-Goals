import React from 'react';
import $ from 'jquery';

import Goals from './Goals.jsx';
import Quote from './Quote.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toString(),
      goals: ['Grocery Shopping', 'Do Laundry', 'Finish MVP'],
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (
    <div>
      <div>
        <h1>Hacker Goals</h1>
      </div>
      <div>
        <h3>Good Morning Raphael</h3>
        <h4>{this.state.date}</h4>
      </div>
      <div>
        <Quote />
      </div>
      <div>
        Title: <input id='title' type='text'></input>
        Description: <input id='description' type='text'></input>
        <span>
          <button>Add New Goal</button>
        </span>
      </div>
      <Goals goals={this.state.goals} />
    </div>
    )
  }
}

export default App;