import React from 'react';

const GoalsEntry = (props) => (
  <div>
    <ul>
      <li><span>{props.goal.title}</span><input type="checkbox" /></li>
    </ul>
  </div>
)

export default GoalsEntry;