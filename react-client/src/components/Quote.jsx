import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ["If you're not learning, you're not growing. -Raphael"]
    }
  }
  
  render() {
    return (
      <div>
        {this.state.quote[0]}
      </div>
    )
  }
}

export default Quote;