import React from 'react';
import GoalsEntry from './GoalsEntry.jsx';

const Goals = (props) => (
  <div>
    You have {props.goals.length} goals this week.
    {props.goals.map(goal => <GoalsEntry goal={goal}/>)}
  </div>
)

export default Goals;