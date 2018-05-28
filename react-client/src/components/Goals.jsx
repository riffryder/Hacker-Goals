import React from 'react';
import GoalsEntry from './GoalsEntry.jsx';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    }
    this.onChange = this.onChange.bind(this);
    this.addNewGoal = this.addNewGoal.bind(this);
  }

  onChange(e) {
    this.setState({
      goal: e.target.value
    })
  }

  addNewGoal() {
    this.props.addNewGoal(this.state.goal);
  }

  render() {
    return (
      <div>
        Goal: <input value={this.state.goal} onChange={this.onChange}></input>
        <span className='add'>
          <button onClick={this.addNewGoal}>Add New Goal</button>
        </span>
        <div>
          You have {this.props.goals.length} goals this week.
          {this.props.goals.map(goal => <GoalsEntry goal={goal}/>)}
        </div>
      </div>
    )
  }
}

export default Goals;